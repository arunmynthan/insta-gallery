import React from "react";
import useStore from "../hooks/useStore";
import { motion } from "framer-motion";

let Imagegrid = ({ setselected }) => {
  let { doc } = useStore("images");

  return (
    <div className="img-grid">
      {doc &&
        doc.map((images) => {
          return (
            <motion.div
              layout
              whileHover={{ opacity: 1 }}
              className="img-wrap"
              key={images.id}
              onClick={() => setselected(images.url)}
            >
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                src={images.url}
                alt=""
              />
            </motion.div>
          );
        })}
    </div>
  );
};

export default Imagegrid;
