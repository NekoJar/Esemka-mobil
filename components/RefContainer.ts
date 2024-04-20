"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const RefContainer = () => {
  const container = useRef(null);

  const { scrollYProgress: scrollYProgressHeight } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgressHeight, [0, 1], [50, 0]);

  return { container, height };
};
