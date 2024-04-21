"use client";

import { PrismicText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import * as prismic from "@prismicio/client";

import { getExcerpt } from "@/lib/getExcerpt";
import { findFirstImage } from "@/lib/findFirstImage";
import { dateFormatter } from "@/lib/dateFormatter";

import Image from "next/image";
import styles from "./Card.module.scss";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";
import { Heading } from "../articles/Heading";

const Card = ({
  i,
  title,
  description,
  src,
  url,

  progress,
  range,
  targetScale,
  article,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  const featuredImage =
    (prismic.isFilled.image(article.data.featuredImage) &&
      article.data.featuredImage) ||
    findFirstImage(article.data.slices);
  const date = prismic.asDate(
    article.data.publishDate || article.first_publication_date
  );
  const excerpt = getExcerpt(article.data.slices);

  const color = [
    { id: 0, name: "#64748b" },
    { id: 1, name: "#9ca3af" },
    { id: 2, name: "#71717a" },
    { id: 3, name: "#a8a29e" },
  ];

  return (
    <>
      <div ref={container} className={styles.cardContainer}>
        <motion.div
          style={{
            backgroundColor: color[i].name,
            scale,
            top: `calc(-5vh + ${i * 25}px)`,
          }}
          className={styles.card}
        >
          <Heading as="h2">
            <PrismicNextLink document={article}>
              <PrismicText field={article.data.title} />
            </PrismicNextLink>
          </Heading>
          <div className={styles.body}>
            <div className={styles.description}>
              <p className="font-serif italic tracking-tighter">
                {dateFormatter.format(date)}
              </p>
              {excerpt && (
                <p className="font-serif leading-none md:text-md md:leading-relaxed text-zinc-900 font-roboto font-extralight">
                  {excerpt}
                </p>
              )}
              <span>
                <PrismicNextLink document={article}>
                  <span className="italic font-roboto font-semibold">
                    See more
                  </span>
                </PrismicNextLink>

                <svg
                  width="22"
                  height="12"
                  viewBox="0 0 22 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                    fill="black"
                  />
                </svg>
              </span>
            </div>

            <div className={styles.imageContainer}>
              <motion.div
                className={styles.inner}
                style={{ scale: imageScale }}
              >
                {prismic.isFilled.image(featuredImage) && (
                  <PrismicNextImage
                    field={featuredImage}
                    fill={true}
                    className="object-cover"
                  />
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Card;
