import React, { useEffect } from "react";
import Intro from "./Intro";
import Description from "./Description";
import Projects from "./Projects";

export const About = () => {
  return (
    <div>
      {/* <Intro /> */}
      <Description />
      <Projects />
    </div>
  );
};
