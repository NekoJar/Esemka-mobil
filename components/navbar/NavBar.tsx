"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import esemkaLogo from "@/public/assets/logo-small.png";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { background } from "../../utils/anim";
import Side from "../sidebar/Side";
import Nav from "./Nav";
import TransitionLink from "../TransitionLink";

const NavBar = ({
  className,
  withProducts,
}: {
  className?: string;
  withProducts?: boolean;
}) => {
  const [isOpenProducts, setOpenProducts] = useState(false);
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  const onOpenProducts = () => {
    setOpenProducts(!isOpenProducts);
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
          setOpenProducts(false);
        },
        onEnterBack: () => {
          gsap.to(
            button.current,
            // @ts-ignore
            { scale: 0, duration: 0.25, ease: "power1.out" },
            setIsActive(false),
            // @ts-ignore
            setOpenProducts(false)
          );
        },
      },
    });
  }, []);

  return (
    <>
      <div className={cn("flex flex-col absolute w-[100vw] z-[2] ", className)}>
        <div
          className={`flex items-center gap-8 p-6 px-16 justify-between 
          ${isOpenProducts ? "bg-zinc-900 transition-colors duration-1000" : "bg-transparent transition-colors duration-1000"}
          `}
        >
          <Link href="/">
            <Image
              src={esemkaLogo}
              alt="esemka-logo"
              width={70}
              height={70}
              className="grayscale brightness-200"
            />
          </Link>
          <ul className="flex font-roboto">
            <li>
              <Button
                variant="link"
                className="decoration-transparent font-extralight text-md hover:text-zinc-400 hover:-translate-y-1  "
              >
                <TransitionLink href="/" label="Home" />
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                className=" decoration-transparent font-extralight text-md hover:text-zinc-400 hover:-translate-y-1  "
              >
                <TransitionLink href="/news" label="News" />
              </Button>
            </li>
            {withProducts && (
              <li>
                <Button
                  variant="link"
                  className=" decoration-transparent font-extralight text-md hover:text-zinc-400 hover:-translate-y-1  "
                >
                  <Link href="#products">Products</Link>
                </Button>
              </li>
            )}
          </ul>
        </div>
        <AnimatePresence mode="wait">
          {isOpenProducts && (
            <div className=" bg-zinc-900 ">
              <Nav onOpenProducts={onOpenProducts} />
            </div>
          )}
        </AnimatePresence>
        <motion.div
          variants={background}
          initial="initial"
          animate={isOpenProducts ? "open" : "closed"}
          className="bg-zinc-900 h-[100vh] w-[100vw] left-0 top-[100%]"
          onClick={onOpenProducts}
        ></motion.div>
      </div>
      <div ref={button} className="headerButtonContainer relative z-[3]">
        <Button
          variant="link"
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="button bg-zinc-700 hover:bg-zinc-900 transition-colors duration-700"
        >
          <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>
        </Button>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Side withProducts={withProducts} />}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
