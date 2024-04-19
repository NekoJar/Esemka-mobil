"use client";
import Lenis from "@studio-freight/lenis";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { projects } from "../../utils/data";
import { LinkButton } from "../ui/LinkButton";
import Card from "./Card";

export function News() {
  const container = useRef(null);
  const { scrollYProgress: scrollYProgressCard } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: scrollYProgressHeight } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgressHeight, [0, 0.9], [50, 0]);

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
    <div className="bg-neutral-100 relative z-[1]">
      <div className="p-8 text-black pt-[30rem] -mb-24">
        <p className="uppercase text-[16rem] flex">News</p>
        <div className="flex justify-between pt-14 -mt-16 border-t-[1px] border-black">
          <ul className="italic lowercase space-x-96 flex">
            <li>karya</li>
            <li>anak</li>
            <li>bangsa</li>
          </ul>
          <p className="text-black/50">(2024)</p>
        </div>
      </div>
      <div ref={container} className="py-96 ">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            //@ts-ignore
            <Card
              key={`p_${i}`}
              i={i + 1}
              {...project}
              progress={scrollYProgressCard}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
      <div className="flex items-center justify-center -mt-[24rem]">
        <LinkButton href="/news" className="border-black text-black">
          <p>More News</p>
        </LinkButton>
      </div>
      <div
        className="bg-neutral-100 relative z-[1] w-[100vw] p-40"
        //@ts-ignore
        style={{ height }}
      ></div>
    </div>
  );
}
