import React from "react";
import { motion } from "framer-motion";

let Module = ({ selectedimg, setselected }) => {
  let handlerevent = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setselected(null);
    }
  };
  return (
    <motion.div
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={handlerevent}
    >
      <motion.img
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        src={selectedimg}
        alt="img"
      />
    </motion.div>
  );
};

export default Module;
