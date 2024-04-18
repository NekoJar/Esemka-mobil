"use client";
import bima12 from "@/public/assets/Bima-1-2-transparent.png";
import bima13 from "@/public/assets/Bima-1-3-transparent.png";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRef, useState } from "react";
import { motion, MotionStyle, useScroll, useTransform } from "framer-motion";

export const Products = () => {
  const [isHovered, setIsHovered] = useState(false);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  const motionStyle: MotionStyle = { x };

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-100">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={motionStyle} className="flex">
          <div className="flex items-center justify-center relative bg-black p-64 gap-8 w-[100vw]">
            <div className="text-8xl text-white">
              <p className="uppercase">Bima 1.2</p>
              <Button
                variant="outlineNoBgRounded"
                className="border-white p-6"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Link href="/products/bima-1-2" className="flex items-center">
                  Learn More
                  <span>
                    <ArrowUpRight
                      size={isHovered ? "17px" : "15px"}
                      style={
                        isHovered
                          ? {
                              transform: `translate(4px, -2px)`,
                              transition: "all",
                              transitionDuration: "350ms",
                            }
                          : {
                              transform: `translate(0px, 0px)`,
                              transition: "all",
                              transitionDuration: "350ms",
                            }
                      }
                    />
                  </span>
                </Link>
              </Button>
            </div>
            <Image
              src={bima12}
              alt="bima-1-2"
              width={600}
              height={600}
              className="grayscale-[20%]"
            />
          </div>

          <div className="flex items-center justify-center relative bg-neutral-100 p-64 gap-8 w-[100vw]">
            <Image
              src={bima13}
              alt="bima-1-3"
              width={600}
              height={600}
              className="grayscale-[20%]"
            />
            <div className="text-8xl  text-right">
              <p className="uppercase">Bima 1.3</p>
              <Button
                variant="outlineNoBgRounded"
                className=" p-6"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Link href="/products/bima-1-3" className="flex items-center">
                  Learn More
                  <span>
                    <ArrowUpRight
                      size={isHovered ? "17px" : "15px"}
                      style={
                        isHovered
                          ? {
                              transform: `translate(4px, -2px)`,
                              transition: "all",
                              transitionDuration: "350ms",
                            }
                          : {
                              transform: `translate(0px, 0px)`,
                              transition: "all",
                              transitionDuration: "350ms",
                            }
                      }
                    />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
