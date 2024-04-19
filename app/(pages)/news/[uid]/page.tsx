import * as prismic from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText, SliceZone } from "@prismicio/react";
import Link from "next/link";

import { Bounded } from "@/components/articles/Bounded";
import { Heading } from "@/components/articles/Heading";
import { HorizontalDivider } from "@/components/articles/HorizontalDivider";
import { Layout } from "@/components/articles/Layout";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { notFound } from "next/navigation";
import { ArticleDocument } from "@/prismicio-types";
import NavBar from "@/components/navbar/NavBar";

type Params = { uid: string };

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

function LatestArticle({ article }: { article: ArticleDocument<string> }) {
  const date = prismic.asDate(
    article.data.publishDate || article.first_publication_date
  );

  return (
    <li>
      <h1 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
        <PrismicNextLink document={article}>
          <PrismicText field={article.data.title} />
        </PrismicNextLink>
      </h1>
      <p className="font-serif italic tracking-tighter text-slate-500">
        {dateFormatter.format(date)}
      </p>
    </li>
  );
}

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
      <NavBar />
      <div className="p-16">
        <Bounded size="widest">
          <Link
            href="/news"
            className="font-semibold tracking-tight text-slate-400"
          >
            &larr; Back to news
          </Link>
        </Bounded>
        <article>
          <Bounded className="pb-0">
            <h1 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
              <PrismicText field={article.data.title} />
            </h1>
            <p className="font-serif italic tracking-tighter text-slate-500">
              {dateFormatter.format(date)}
            </p>
          </Bounded>
          <SliceZone slices={article.data.slices} components={components} />
        </article>
        {latestArticles.length > 0 && (
          <Bounded>
            <div className="grid grid-cols-1 justify-items-center gap-16 md:gap-24">
              <HorizontalDivider />
              <div className="w-full">
                <Heading size="2xl" className="mb-10">
                  Latest articles
                </Heading>
                <ul className="grid grid-cols-1 gap-12">
                  {latestArticles.map((article) => (
                    <LatestArticle key={article.id} article={article} />
                  ))}
                </ul>
              </div>
            </div>
          </Bounded>
        )}
      </div>
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
