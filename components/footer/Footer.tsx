"use client";
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { FacebookIcon, Phone, YoutubeIcon } from "lucide-react";
import esemkaLogo from "@/public/assets/logo-small.png";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "News",
    href: "#news",
  },
  {
    title: "Products",
    href: "#products",
  },
  {
    title: "Sitemap",
    href: "#products",
  },
  {
    title: "Privacy Policy",
    href: "#products",
  },
  {
    title: "Terms & Condition",
    href: "#products",
  },
];

export const Footer = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-1000, 0]);

  return (
    <div
      ref={container}
      className="h-[100vh] flex items-center justify-center w-[100vw] "
    >
      <motion.div style={{ y }} className="text-white">
        <div className="flex justify-center">
          <p className="max-w-6xl flex text-center text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, velit.
            Illum placeat optio eligendi voluptatum sint expedita, eum eaque
            soluta corporis, tenetur, numquam modi distinctio dignissimos
            obcaecati dicta. Unde, corporis!
          </p>
        </div>

        <div>
          <p className="text-[30rem] uppercase drop-shadow-lg leading-tight text-center">
            EsemKa
          </p>
          <ul className="flex justify-between gap-4">
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
              <a
                href="https://web.facebook.com/EsemkaIndonesia/"
                target="_blank"
              >
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
        </div>

        {/* <div className="text-white h-full flex justify-between items-center">
          <div className="flex space-x-4 items-center ">
            <Link href="/">
              <Image
                src={esemkaLogo}
                alt="esemka-logo"
                width={100}
                height={100}
                className="object-cover saturate-0 contrast-100 brightness-100 invert"
              />
            </Link>
            <div className="space-y-4 ">
              <div>
                <p>PT Solo Manufaktur Kreasi</p>
                <p className="flex items-center gap-2">
                  <Phone width={20} height={20} />
                  0271 7851400
                </p>
              </div>
              <p className="text-sm font-extralight text-white/70">
                Jl. Raya Demangan Km 3,5 Sambi, Boyolali Jawa Tengah
              </p>
            </div>
          </div>
          <div className="flex gap-2 ">
            <Link href="">
              <TwitterLogoIcon width={50} height={50} color="white" />
            </Link>
            <Link href="">
              <InstagramLogoIcon width={50} height={50} color="white" />
            </Link>
          </div>
        </div>
        <ul className="flex gap-8 pt-8 mb-3">
          {navItems.map((nav, i) => (
            <li key={i}>
              <Link href={nav.href}>{nav.title}</Link>
            </li>
          ))}
        </ul>
        <p className="text-xs text-zinc-600 font-extralight">
          ©2019 - 2024 PT Solo Manufaktur Kreasi. All Rights Reserved.
        </p> */}
      </motion.div>
    </div>
  );
};
