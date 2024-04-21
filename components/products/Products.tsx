"use client";
import bima12 from "@/public/assets/Bima-1-2-transparent.png";
import bima13 from "@/public/assets/Bima-1-3-transparent.png";
import {
  motion,
  MotionStyle,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { File } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "../ui/button";
import { GetChars } from "../ui/GetChars";
import { LinkButton } from "../ui/LinkButton";

export const Products = () => {
  const title = useRef(null);
  const products = useRef(null);

  const isInView = useInView(title, { margin: "1%" });
  const isInViewProducts = useInView(products, { margin: "20%" });

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * 5 * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const motionStyle: MotionStyle = { x };

  return (
    <section
      ref={targetRef}
      className="relative h-[600vh] bg-neutral-100"
      id="products"
    >
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

          <div
            className="flex bg-neutral-100 p-64 justify-between w-[100vw]"
            ref={products}
          >
            <div className="flex flex-col items-start justify-evenly relative">
              <div className="text-[10rem] leading-snug">
                <GetChars
                  word="Bima 1.2"
                  isInView={isInViewProducts}
                  className="uppercase"
                />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <LinkButton href="/products/bima-1-2">
                      <p>Book Now</p>
                    </LinkButton>
                    <Button
                      variant="outlineRounded"
                      className="bg-zinc-700 text-zinc-200 p-6"
                    >
                      <a
                        href="./Brochure-bima-1-2.pdf"
                        download="Brochure Bima 1.2.pdf"
                        className="flex gap-2 items-center"
                      >
                        Brochure
                        <span>
                          <File />
                        </span>
                      </a>
                    </Button>
                  </div>
                  <p className="text-sm font-extralight italic">(2019)</p>
                </div>
              </div>
              <div className="text-[10rem] leading-snug">
                <GetChars
                  word="Bima 1.3"
                  isInView={isInViewProducts}
                  className="uppercase"
                />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <LinkButton href="/products/bima-1-3">
                      <p>Book Now</p>
                    </LinkButton>
                    <Button
                      variant="outlineRounded"
                      className="bg-zinc-700 text-zinc-200 p-6"
                    >
                      <a
                        href="./Brochure-bima-1-3.pdf"
                        download="Brochure Bima 1.3.pdf"
                        className="flex gap-2 items-center"
                      >
                        Brochure
                        <span>
                          <File />
                        </span>
                      </a>
                    </Button>
                  </div>
                  <p className="text-sm font-extralight italic">(2019)</p>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col justify-center">
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  ease: "linear",
                  repeat: Infinity,
                }}
                viewBox="0 0 300 300"
                className="w-64 h-64 md:w-[500px] md:h-[500px] border-2 border-zinc-800 rounded-full bg-black"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 150, 150 m -110, 0 a 110,110 0 0,1 220,0 a 110,110 0 0,1 -220,0 "
                  />
                </defs>
                <text fill="#fff">
                  <textPath
                    xlinkHref="#circlePath"
                    className="text-3xl uppercase font-roboto "
                  >
                    Esemka Mobil • Karya Anak Indonesia •
                  </textPath>
                </text>
              </motion.svg>
              <div className="w-16 h-16 md:w-64 md:h-64 absolute top-0 left-0 right-0 bottom-0 m-auto bg-zinc-300 border-zinc-600 border-2 text-white rounded-full flex items-center justify-center"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
