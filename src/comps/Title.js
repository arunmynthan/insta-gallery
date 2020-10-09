import React from "react";
import { useSpring, animated } from "react-spring";

const Title = () => {
  let props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div className="title">
      <animated.h1 style={props}>InstaGallery</animated.h1>
      <animated.h2 style={props}>My Gallery</animated.h2>
      <animated.p style={props}>
        Upload your favourite images, and create a beautiful gallery
      </animated.p>
    </div>
  );
};

export default Title;
