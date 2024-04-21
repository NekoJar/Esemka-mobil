"use client";
import { createClient } from "@/prismicio";
import { MotionValue } from "framer-motion";
import React from "react";
import Card from "./Card";

const ArticleSectionSlider = ({
  articles,
  scrollYProgressCard,
}: {
  articles: any[]; // Adjust the type accordingly
  scrollYProgressCard: MotionValue<number>;
}) => {
  return (
    <>
      {articles.slice(0, 3).map((article, i) => {
        const targetScale = 1 - (articles.length - i) * 0.05;
        return (
          //@ts-ignore
          <Card
            key={article.id}
            i={i}
            progress={scrollYProgressCard}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
            article={article}
          />
        );
      })}
    </>
  );
};

// Fetch articles asynchronously and pass them to ArticleSectionSlider
export const ArticleSectionSliderContainer = ({
  scrollYProgressCard,
}: {
  scrollYProgressCard: MotionValue<number>;
}) => {
  const [articles, setArticles] = React.useState<any[]>([]); // Adjust the type accordingly

  React.useEffect(() => {
    const fetchArticles = async () => {
      const client = createClient();
      const fetchedArticles = await client.getAllByType("article", {
        orderings: [
          { field: "my.article.publishDate", direction: "desc" },
          { field: "document.first_publication_date", direction: "desc" },
        ],
      });
      setArticles(fetchedArticles);
    };

    fetchArticles();
  }, []);

  return (
    <ArticleSectionSlider
      articles={articles}
      scrollYProgressCard={scrollYProgressCard}
    />
  );
};
