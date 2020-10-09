import React from "react";
import useStorage from "../hooks/useStorage";
import { useEffect } from "react";
import { motion } from "framer-motion";

function Progressbar({ file, setfile }) {
  let { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setfile(null);
    }
  }, [url, setfile]);

  return (
    <motion.div
      className="progress-bar"
      animate={{ width: `${progress} %` }}
    ></motion.div>
  );
}

export default Progressbar;
