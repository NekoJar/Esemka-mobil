import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { Bounded } from "@/components/articles/Bounded";
import { Article } from "@/components/articles/Article";

import React from "react";
import { Layout } from "@/components/articles/Layout";

const page = async () => {
  const client = createClient();

  const articles = await client.getAllByType("article", {
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });
  //   const navigation = await client.getSingle("navigation");
  //   const settings = await client.getSingle("settings");

  return (
    <div>
      <Bounded size="default">
        <ul className="grid grid-cols-1 gap-16">
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </ul>
      </Bounded>
    </div>
  );
};

export default page;
