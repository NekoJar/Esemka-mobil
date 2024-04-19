import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Body.module.scss";
import { blur, translate } from "../../utils/anim";
import { Dispatch, SetStateAction } from "react";
// import { getChars } from "../ui/GetChars";

export function Body({
  links,
  selectedLink,
  setSelectedLink,
  onOpenProducts,
}: {
  links: Array<any>;
  selectedLink: any;
  setSelectedLink: Dispatch<
    SetStateAction<{ isActive: boolean; index: number }>
  >;
  onOpenProducts: any;
}) {
  return (
    <div className={styles.body}>
      {links.map((link: any, index: any) => {
        const { title, href } = link;
        return (
          <Link key={`l_${index}`} href={href}>
            <motion.p
              onMouseOver={() => {
                setSelectedLink({ isActive: true, index });
              }}
              onMouseLeave={() => {
                setSelectedLink({ isActive: false, index });
              }}
              variants={blur}
              onClick={onOpenProducts}
              animate={
                selectedLink.isActive && selectedLink.index != index
                  ? "open"
                  : "closed"
              }
            >
              {/* {getChars(title)} */}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
}
