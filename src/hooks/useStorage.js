import { useState, useEffect } from "react";
import { firestorage, timestamp, firestore } from "../firebase/config";

let useStorage = (file) => {
  let [progress, setProgress] = useState(0);
  let [error, setError] = useState(null);
  let [url, setUrl] = useState(null);

  useEffect(() => {
    let storageref = firestorage.ref(file.name);
    let databaseref = firestore.collection("images");
    storageref.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;

        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        let url = await storageref.getDownloadURL();
        let createdAt = timestamp();
        databaseref.add({ url, createdAt });

        setUrl(url);
      }
    );
  }, [file]);
  return { progress, error, url };
};

export default useStorage;
