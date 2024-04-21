"use client";
import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export const NewsRef = () => {
  const container = useRef(null);
  const { scrollYProgress: scrollYProgressCard } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: scrollYProgressHeight } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgressHeight, [0, 0.9], [50, 0]);
  return { container, height, scrollYProgressCard };
};
