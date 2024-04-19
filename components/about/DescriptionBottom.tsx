import React, { ReactNode, useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { AnimatedText } from "../ui/AnimatedText";

const phrases = [
  "seiring dengan dicetuskannya kota Solo ",
  "sebagai Kota Vokasi oleh Bapak Joko Widodo",
  "Banyaknya SMK yang berdiri, mendorong",
  "semangat komunitas ESEMKA untuk",
  "semakin cepat mewujudkan ",
  "cita-cita mereka.",
];

export default function DescriptionBottom() {
  return (
    <div className="relative text-white/60 text-[2.5vw] uppercase mt-[30vw] ml-[10vw] ">
      {phrases.map((phrase, index) => {
        return <AnimatedText key={index}>{phrase}</AnimatedText>;
      })}
    </div>
  );
}
