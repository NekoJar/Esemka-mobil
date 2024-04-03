import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Image.module.scss";
import { opacity } from "../../utils/anim";

export default function Index({ src, selectedLink, alt }) {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate={selectedLink.isActive ? "open" : "closed"}
      className={styles.imageContainer}
    >
      <Image src={`/assets/${src}`} fill={true} alt={alt} />
    </motion.div>
  );
}
