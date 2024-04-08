import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { FacebookIcon, Phone, YoutubeIcon } from "lucide-react";
import esemkaLogo from "@/public/assets/logo.png";
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
];

export const Footer = () => {
  return (
    <>
      <div className="text-white">
        <div className="flex justify-between">
          <Link href="/" className="relative w-[30%] h-[100%]">
            <Image
              src={esemkaLogo}
              alt="esemka-logo"
              width={200}
              height={200}
              className="object-cover grayscale contrast-200 brightness-200 invert hover:grayscale-0 hover:brightness-100 hover:contrast-100 hover:invert-0 transition-all duration-500"
            />
          </Link>
          <div className="flex flex-col">
            <div className="space-y-4">
              <div>
                <p>PT Solo Manufaktur Kreasi</p>
                <p className="flex items-center gap-2">
                  <Phone width={20} height={20} />
                  0271 7851400
                </p>
              </div>
              <p>Jl. Raya Demangan Km 3,5 Sambi, Boyolali Jawa Tengah</p>
            </div>
            <div className="flex items-end">
              <TwitterLogoIcon width={40} height={40} color="white" />
              <InstagramLogoIcon width={40} height={40} color="white" />
            </div>
          </div>
        </div>
        <ul className="flex gap-4">
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
