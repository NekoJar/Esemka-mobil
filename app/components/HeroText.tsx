"use client";
import styles from "./herotext.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../utils/useMousePosition";

interface Coordinates {
  x: number | null;
  y: number | null;
}

export const HeroText = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y }: Coordinates = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className={styles.main}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          className="text-zinc-800 text-center"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          Anak-anak Indonesia mampu untuk membuat mobil dengan kemampuan mereka
          sendiri.
        </p>
      </motion.div>

      <div className={styles.body}>
        <div className="text-zinc-500 text-center uppercase">
          <p className="text-zinc-200">Esemka Bisa</p>
          <p>Indonesia Bisa</p>
        </div>
      </div>
    </main>
  );
};
