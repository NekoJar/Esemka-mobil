"use client";
import styles from "./PlainCard.module.scss";
import { useScroll, motion } from "framer-motion";
import React, { useRef } from "react";

export const PlainCard = ({}) => {
  return (
    <div className="h-[100vh] flex items-center justify-center sticky top-0">
      <p className="text-white text-8xl uppercase">news</p>
    </div>
  );
};
