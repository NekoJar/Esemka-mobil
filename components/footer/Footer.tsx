import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { FacebookIcon, Phone, YoutubeIcon } from "lucide-react";
import esemkaLogo from "@/public/assets/logo-small.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
  return (
    <>
      <div className="text-white">
        <div className="flex justify-between ">
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
        </p>
      </div>
    </>
  );
};
