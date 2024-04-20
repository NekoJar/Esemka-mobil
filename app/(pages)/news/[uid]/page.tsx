import * as prismic from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import Link from "next/link";

import { Bounded } from "@/components/articles/Bounded";
import { Heading } from "@/components/articles/Heading";
import { HorizontalDivider } from "@/components/articles/HorizontalDivider";
import { Layout } from "@/components/articles/Layout";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { notFound } from "next/navigation";
import NavBar from "@/components/navbar/NavBar";
import { RefContainer } from "@/components/RefContainer";
import { Body } from "./Body";

type Params = { uid: string };

export async function generateMetadata({ params }: { params: Params }) {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const article = await client
    .getByUID("article", params.uid)
    .catch(() => notFound());

  return {
    title: `${prismic.asText(article.data.title)} | ${prismic.asText(
      settings.data.name
    )}`,
    description: article.data.meta_description,
    openGraph: {
      title: article.data.meta_title,
      images: [
        {
          url: article.data.meta_image.url,
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const client = createClient();

  const article = await client
    .getByUID("article", params.uid)
    .catch(() => notFound());
  const latestArticles = await client.getAllByType("article", {
    limit: 3,
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  const date = prismic.asDate(
    article.data.publishDate || article.first_publication_date
  );

  return (
    <>
      <Body article={article} latestArticles={latestArticles} date={date} />
    </>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const articles = await client.getAllByType("article");

  return articles.map((article) => {
    return { uid: article.uid };
  });
}
