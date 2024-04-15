"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { projects } from "../../utils/data";
import Card from "./Card";
import { PlainCard } from "./PlainCard";

export function News() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    //@ts-ignore
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <div className="bg-neutral-100">
      <div ref={container} className="py-96 ">
        {/* <PlainCard /> */}
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            //@ts-ignore

            <Card
              key={`p_${i}`}
              i={i + 1}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
      <div className="p-8 text-black -mt-24">
        <div className="flex justify-between pb-14 -mb-16 border-b-[1px] border-black">
          <ul className="italic lowercase space-x-96 flex">
            <li>karya</li>
            <li>anak</li>
            <li>bangsa</li>
          </ul>
          <p className="text-black/50">(2024)</p>
        </div>
        <p className="uppercase text-[16rem] flex items-end justify-end">
          News
        </p>
      </div>
    </div>
  );
}
