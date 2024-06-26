import React, { ReactNode, useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import styles from "./Description.module.scss";

const phrases = [
  "Berawal dari sekelompok orang",
  "yang mempunyai cita-cita yang sama",
  "untuk membuktikan bahwa anak-anak Indonesia",
  "bisa dan mampu untuk membuat mobil sendiri",
];

export default function Description() {
  return (
    <div className="relative text-white/80 text-[2.5vw] uppercase mt-[10vw] mr-[10vw] text-right font-roboto">
      {phrases.map((phrase, index) => {
        return <AnimatedText key={index}>{phrase}</AnimatedText>;
      })}
    </div>
  );
}

const AnimatedText = ({ children }: { children: ReactNode }) => {
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
    <p ref={text} className="m-0 relative">
      {children}
    </p>
  );
};
