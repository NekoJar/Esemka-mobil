import React, { ReactNode, useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const phrases = [
  "seiring dengan dicetuskannya kota Solo ",
  "sebagai Kota Vokasi oleh Bapak Joko Widodo ",
  "Banyaknya SMK yang berdiri, mendorong",
  "semangat komunitas ESEMKA untuk",
  "semakin cepat mewujudkan ",
  "cita-cita mereka.",
];

export default function DescriptionBottom() {
  return (
    <div className="relative text-white/90 text-[2.6vw] uppercase mt-[20vw] mr-[10vw]">
      {phrases.map((phrase, index) => {
        return <AnimatedText key={index}>{phrase}</AnimatedText>;
      })}
    </div>
  );
}

function AnimatedText({ children }: { children: ReactNode }) {
  const text = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(text.current, {
        scrollTrigger: {
          trigger: text.current,
          scrub: true,
          start: "0px bottom",
          end: "bottom+=400px bottom",
        },
        opacity: 0,
        right: "-200px",
        ease: "power3.Out",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <p ref={text} className="text-right m-0 relative">
      {children}
    </p>
  );
}
