import { firestore } from "../firebase/config";
import { useState, useEffect } from "react";
let useStore = (collection) => {
  let [doc, setDoc] = useState([]);

  useEffect(() => {
    let unsub = firestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDoc(documents);
      });
    return () => unsub();
  }, [collection]);
  return { doc };
};

export default useStore;
