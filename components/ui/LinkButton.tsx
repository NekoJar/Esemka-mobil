"use client";
import React, { ReactNode, useState } from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "./button";
import clsx from "clsx";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const LinkButton = ({
  className,
  children,
  href,
}: {
  className?: string;
  children: ReactNode;
  href: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Button
      variant="outlineNoBgRounded"
      className={clsx(
        "border-zinc-400 text-zinc-400 p-6 hover:border-black hover:text-black transition-colors duration-100",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={href} className="flex items-center">
        {children}
        <span>
          <ArrowUpRight
            size={isHovered ? "17px" : "15px"}
            style={
              isHovered
                ? {
                    transform: `translate(4px, -2px)`,
                    transition: "all",
                    transitionDuration: "300ms",
                  }
                : {
                    transform: `translate(0px, 0px)`,
                    transition: "all",
                    transitionDuration: "300ms",
                  }
            }
          />
        </span>
      </Link>
    </Button>
  );
};
