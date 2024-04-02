"use client";

import Image from "next/image";
import React, { useState } from "react";
import esemkaLogo from "@/public/assets/logo.png";
import { AlignJustify, ChevronDown, CircleUser } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-col absolute w-[100%] z-[2]">
      <div
        className={
          open
            ? "flex items-center gap-8 p-2 px-16 justify-between bg-black border-b border-black"
            : "flex items-center gap-8 p-2 px-16 justify-between bg-gradient-to-b from-black to-transparent hover:bg-black transition-colors duration-700 border-b border-black"
        }
      >
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              src={esemkaLogo}
              alt="esemka-logo"
              width={100}
              height={100}
              className="grayscale contrast-200 brightness-200 invert hover:grayscale-0 hover:brightness-100 hover:contrast-100 hover:invert-0 transition-all duration-500"
            />
          </Link>
          <ul className="flex font-extralight">
            <li>
              <Button
                variant="link"
                className="text-white decoration-transparent text-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-red-500 hover:to-rose-300 transition-colors"
              >
                Home
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                className="text-white decoration-transparent text-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-red-500 hover:to-rose-300 transition-colors"
              >
                About
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                className="text-white decoration-transparent text-md hover:text-transparent hover:text-red-400 transition-colors gap-1"
                onClick={onOpen}
              >
                <span>Products</span>
                <span>
                  <ChevronDown className="hover:text-red-400" />
                </span>
              </Button>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4 text-white">
          <CircleUser className="text-white hover:text-red-400 font-extralight" />
          <Button onClick={onOpen} variant="link">
            <AlignJustify className="text-white hover:text-red-400 font-extralight" />
          </Button>
        </div>
      </div>
      {open && (
        <div className="flex p-64 bg-black/75 items-center text-white">
          wjaij
        </div>
      )}
    </div>
  );
};

export default NavBar;
