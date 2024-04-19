"use client";
import bima12 from "@/public/assets/Bima-1-2-transparent.png";
import bima13 from "@/public/assets/Bima-1-3-transparent.png";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRef, useState } from "react";
import {
  motion,
  MotionStyle,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { LinkButton } from "../ui/LinkButton";
import { AnimatedText } from "../ui/AnimatedText";
import { slideUp } from "@/utils/anim";
import { GetChars } from "../ui/GetChars";

export const Products = () => {
  const title = useRef(null);
  const isInView = useInView(title, { margin: "1%" });
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const motionStyle: MotionStyle = { x };

  return (
    <section ref={targetRef} className="relative h-[600vh] bg-neutral-100">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={motionStyle} className="flex">
          <div className="flex items-center justify-center relative bg-black p-64 gap-8 w-[100vw]">
            <div ref={title} className="text-[20rem] text-neutral-100">
              <GetChars word="Products" isInView={isInView} />
            </div>
          </div>

          <div className="flex items-center justify-center relative bg-gradient-to-br from-zinc-200 via-zinc-400 to-zinc-600 p-64 gap-96 w-[200vw]">
            <Image
              src={bima12}
              alt="bima-1-2"
              width={800}
              height={800}
              className="grayscale-[20%]"
            />
            <Image
              src={bima13}
              alt="bima-1-3"
              width={850}
              height={850}
              className="grayscale-[20%]"
            />
          </div>

          <div className="flex flex-col items-start justify-between relative bg-neutral-100 p-64  pl-20 w-[100vw]">
            <div className="text-[10rem]  leading-snug">
              <p className="uppercase">Bima 1.2</p>
              <div className="flex items-center justify-between">
                <LinkButton href="/products/bima-1-2">
                  <p>Learn More</p>
                </LinkButton>
                <p className="text-sm font-extralight italic">(2019)</p>
              </div>
            </div>
            <div className="text-[10rem] leading-snug">
              <p className="uppercase">Bima 1.3</p>
              <div className="flex items-center justify-between">
                <LinkButton href="/products/bima-1-2">
                  <p>Learn More</p>
                </LinkButton>
                <p className="text-sm font-extralight italic">(2019)</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
