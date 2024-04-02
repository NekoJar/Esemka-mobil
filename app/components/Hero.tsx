"use client";

import heroImage from "@/public/assets/Bima-transparent.png";
import Image from "next/image";
import { HeroText } from "./HeroText";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, ChevronDown, ChevronsDown } from "lucide-react";

export const Hero = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const xs = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const sm = useTransform(scrollYProgress, [0, 1], [0, -550]);
  const md = useTransform(scrollYProgress, [0, 1], [0, 550]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      ref={container}
      className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-700 to-zinc-800 w-[100%]"
    >
      <div className="flex items-center justify-center p-64 pt-32">
        <motion.div
          style={{ y: lg }}
          className="z-[1] absolute flex justify-center"
        >
          <Image
            src={heroImage}
            alt="heroImage"
            className="w-[75%] h-auto opacity-100 drop-shadow-2xl"
          />
        </motion.div>
        <div>
          <motion.p style={{ y: sm }} className="absolute">
            <p className="text-[32rem] text-white  py-16 uppercase drop-shadow-lg">
              EsemKa
            </p>
          </motion.p>
          <motion.p style={{ y: md }}>
            <p className="text-[32rem] text-white  py-16 uppercase drop-shadow-lg opacity-10">
              EsemKa
            </p>
          </motion.p>
        </div>
      </div>
      <div className="flex justify-center items-center pb-8">
        <motion.p style={{ y: sm }}>
          <ChevronsDown
            width={200}
            height={200}
            color="#ffffff3e"
            className="animate-bounce duration-2000"
            strokeWidth={0.2}
          />
        </motion.p>
      </div>
      <HeroText />
    </div>
  );
};
