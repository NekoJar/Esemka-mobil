import { createClient } from "@/prismicio";
import React from "react";
import { Article } from "./articles/Article";

export const GetArticles = async () => {
  const client = createClient();

  const articles = await client.getAllByType("article", {
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });
  return (
    <div className="mx-auto w-full max-w-screen-2xl ">
      <ul className="grid grid-cols-1 gap-16 ">
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </ul>
    </div>
  );
};
