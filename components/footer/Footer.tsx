"use client";
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { FacebookIcon, Phone, YoutubeIcon } from "lucide-react";
import esemkaLogo from "@/public/assets/logo-small.png";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  animate,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import useMeasure from "react-use-measure";
import TransitionLink from "../TransitionLink";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "News",
    href: "/news",
  },
  {
    title: "Sitemap",
    href: "#products",
  },
  {
    title: "Privacy Policy",
    href: "",
  },
  {
    title: "Terms & Condition",
    href: "",
  },
];

export const Footer = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-1000, 0]);

  const slides = [
    { text: "Esemka Mobil" },
    { text: "Karya anak bangsa" },
    { text: "+62 2717851400" },
    { text: "information@esemka.org" },
    { text: "©2019 - 2024" },
    { text: "Esemka Mobil" },
    { text: "Karya anak bangsa" },
    { text: "+62 2717851400" },
    { text: "information@esemka.org" },
    { text: "©2019 - 2024" },
  ];

  const duplicatedSlides = [...slides, ...slides];

  return (
    <div
      ref={container}
      className="h-[100vh] flex items-end justify-center w-[100vw] bg-zinc-900"
    >
      <motion.div style={{ y }} className="text-white">
        <div className="flex justify-between">
          <p className="max-w-6xl text-md font-roboto  p-40 text-right gap-4">
            {navItems.map((nav, i) => (
              <span className="flex justify-start w-full" key={i}>
                <TransitionLink
                  href={nav.href}
                  className=" text-zinc-700 hover:text-zinc-400 hover:-translate-x-2 text-right"
                  label={nav.title}
                ></TransitionLink>
              </span>
            ))}
          </p>
          <p className="max-w-6xl text-md font-roboto  p-40 text-right gap-4">
            {navItems.map((nav, i) => (
              <span className="flex justify-end w-full" key={i}>
                <TransitionLink
                  href={nav.href}
                  className=" text-zinc-700 hover:text-zinc-400 hover:-translate-x-2 text-right"
                  label={nav.title}
                ></TransitionLink>
              </span>
            ))}
          </p>
        </div>

        <ul className="flex justify-around gap-4 italic relative -mb-2 font-roboto">
          <li>
            <a href="https://twitter.com/esemkaindonesia" target="_blank">
              (X)
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCNlpognhK2pJ9tFMhlBHRqA"
              target="_blank"
            >
              (Youtube)
            </a>
          </li>
          <li>
            <a href="https://web.facebook.com/EsemkaIndonesia/" target="_blank">
              (Facebook)
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/esemkaindonesia/"
              target="_blank"
            >
              (Instagram)
            </a>
          </li>
        </ul>
        <div>
          <p className="text-[30rem] uppercase drop-shadow-lg leading-tight text-center relative">
            EsemKa
          </p>
        </div>
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: ["-100%", "0%"],
              transition: {
                ease: "linear",
                duration: 30,
                repeat: Infinity,
              },
            }}
          >
            {duplicatedSlides.map((slide, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ width: `${100 / slides.length}%` }}
              >
                <div className="flex items-center justify-center h-full text-sm italic text-zinc-500 font-roboto text-center">
                  {slide.text}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
