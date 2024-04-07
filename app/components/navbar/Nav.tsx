"use client";
import styles from "./Nav.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import { height } from "../../utils/anim";
import Body from "./Body";
// import Footer from "./Footer";
import Image from "./Image";
import Footer from "./Footer";

const links = [
  {
    title: "Bima 1.2",
    href: "/",
    src: "esemka-bima-1-2.jpg",
  },
  {
    title: "Bima 1.3",
    href: "/shop",
    src: "esemka-bima-1-3.png",
  },
  // {
  //   title: "Home",
  //   href: "/",
  //   src: "Esemka_Bima.jpg",
  // },
  // {
  //   title: "Shop",
  //   href: "/shop",
  //   src: "Esemka_Bima.jpg",
  // },
  // {
  //   title: "Home",
  //   href: "/",
  //   src: "Esemka_Bima.jpg",
  // },
];

export default function Nav() {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          <Footer />
        </div>
        <Image
          src={links[selectedLink.index].src}
          selectedLink={selectedLink}
          alt={links}
        />
      </div>
    </motion.div>
  );
}
