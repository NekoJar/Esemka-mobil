"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { projects } from "../../utils/data";
import Card from "./Card";
import { PlainCard } from "./PlainCard";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

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
      <div className="p-8 text-black -mb-24">
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
      <div className="flex items-center justify-center -mt-[24rem] pb-96">
        <Button
          variant="outlineNoBg"
          className="rounded-full p-8 border-black/35"
        >
          <p className="flex gap-4 items-center">
            More News
            <span>
              <ArrowUpRight />
            </span>
          </p>
        </Button>
      </div>
    </div>
  );
}
