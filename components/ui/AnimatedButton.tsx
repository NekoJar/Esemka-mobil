import React, { ReactNode } from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "./button";
import clsx from "clsx";

export const AnimatedButton = ({
  className,
  children,
  ...attributes
}: {
  className: string;
  children: ReactNode;
}) => {
  return (
    <Button
      variant="outlineNoBgRounded"
      className={clsx("p-6", className)}
      {...attributes}
    >
      {children}
    </Button>
  );
};
