import React from "react";
import Title from "./comps/Title";
import Uploadform from "./comps/uploadform";
import Imagegrid from "./comps/imagegrid";
import Module from "./comps/module";
import { useState } from "react";

function App() {
  let [selectedimg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title />
      <Uploadform />
      <Imagegrid setselected={setSelectedImg} />
      {selectedimg && (
        <Module selectedimg={selectedimg} setselected={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
