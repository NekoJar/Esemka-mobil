import { motion } from "framer-motion";
import { slideUp } from "@/utils/anim";
import { cn } from "@/lib/utils";

export const GetChars = ({
  word,
  isInView,
  className,
}: {
  word: string;
  isInView: boolean;
  className?: string;
}) => {
  return (
    <p className={cn("m-0", className)}>
      {word.split("").map((char: string, index) => {
        return (
          <span key={index} className="relative overflow-hidden inline-flex">
            <motion.span
              variants={slideUp}
              custom={index}
              animate={isInView ? "open" : "closed"}
              key={index}
            >
              {char}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
};
