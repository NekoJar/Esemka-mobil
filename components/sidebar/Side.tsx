import React, { useState } from "react";
import styles from "./Side.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../../utils/anim";
import SideLink from "./Link";
import Curve from "./Curve";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "News",
    href: "/news",
  },
  {
    title: "Products",
    href: "#products",
  },
];

export default function Side({ withProducts }: { withProducts?: boolean }) {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  const navItemsWithProducts = navItems;
  const navItemsWithoutProducts = navItems.slice(0, 2);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {withProducts
            ? navItemsWithProducts.map((data, index) => {
                return (
                  <SideLink
                    key={index}
                    data={{ ...data, index }}
                    isActive={selectedIndicator == data.href}
                    setSelectedIndicator={setSelectedIndicator}
                  ></SideLink>
                );
              })
            : navItemsWithoutProducts.map((data, index) => {
                return (
                  <SideLink
                    key={index}
                    data={{ ...data, index }}
                    isActive={selectedIndicator == data.href}
                    setSelectedIndicator={setSelectedIndicator}
                  ></SideLink>
                );
              })}
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
