import React, { useEffect } from "react";
import Intro from "./Intro";
import Description from "./Description";
import Projects from "./Projects";
import DescriptionBottom from "./DescriptionBottom";

export const About = () => {
  return (
    <div className="pt-32">
      <div className="p-8 text-white">
        <p className="uppercase text-[16rem] ">History</p>
        <div className="flex justify-between pt-14 -mt-16 border-t-[1px] border-white">
          <ul className="italic lowercase space-x-96 flex">
            <li>karya</li>
            <li>anak</li>
            <li>bangsa</li>
          </ul>
          <p className="text-white/50">(2024)</p>
        </div>
      </div>

      <Description />
      <div className="flex justify-end items-end p-8">
        <DescriptionBottom />
      </div>
      <div>
        <Projects />
      </div>
    </div>
  );
};
