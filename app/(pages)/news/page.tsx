import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { Bounded } from "@/components/articles/Bounded";
import { Article } from "@/components/articles/Article";

import React from "react";
import { Layout } from "@/components/articles/Layout";
import NavBar from "@/components/navbar/NavBar";
import { Footer } from "@/components/footer/Footer";

export async function generateMetadata() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    title: prismic.asText(settings.data.name),
  };
}

const page = async () => {
  const client = createClient();

  const articles = await client.getAllByType("article", {
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  return (
    <>
      <NavBar />
      <div className="space-y-32 pb-32">
        <div className="p-8 text-black">
          <p className="uppercase text-[16rem] flex">News</p>
          <div className="flex justify-between pt-14 -mt-16 border-t-[1px] border-black">
            <ul className="italic lowercase space-x-96 flex">
              <li>karya</li>
              <li>anak</li>
              <li>bangsa</li>
            </ul>
            <p className="text-black/50">(2024)</p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-screen-2xl">
          <ul className="grid grid-cols-1 gap-16">
            {articles.map((article) => (
              <Article key={article.id} article={article} />
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-zinc-800 py-10 px-16 ">
        <Footer />
      </div>
    </>
  );
};

export default page;
