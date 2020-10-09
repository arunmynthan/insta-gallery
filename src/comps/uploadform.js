import React from "react";
import { useState } from "react";
import Progressbar from "./progressbar";
import { useSpring, animated } from "react-spring";
function Uploadform() {
  let [file, setFile] = useState(null);

  let [error, setError] = useState(null);

  let types = ["image/jpeg", "image/png"];

  let handlechange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
      setError("Please select an image thats jpeg or png");
    }
  };
  let props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <>
      <animated.form style={props}>
        <label>
          <input type="file" onChange={handlechange} />
          <span>+</span>
        </label>
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div>{file.name}</div>}
          {file && <Progressbar file={file} setfile={setFile} />}
        </div>
      </animated.form>
    </>
  );
}

export default Uploadform;
