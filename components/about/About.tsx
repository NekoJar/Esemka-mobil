import React, { useEffect } from "react";
import Intro from "./Intro";
import Description from "./Description";
import Projects from "./Projects";
import DescriptionBottom from "./DescriptionBottom";

export const About = () => {
  return (
    <div className="pt-32">
      <div className="px-20 text-white/60">
        <p className={` uppercase text-[16rem] font-extrabold font-montserrat`}>
          History
        </p>
      </div>

      <Description />
      <div className="flex p-8 pb-96">
        <DescriptionBottom />
      </div>
      <div>
        <Projects />
      </div>
    </div>
  );
};
