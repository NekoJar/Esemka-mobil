"use client";
import { Bounded } from "@/components/articles/Bounded";
import { Heading } from "@/components/articles/Heading";
import { HorizontalDivider } from "@/components/articles/HorizontalDivider";
import { Footer } from "@/components/footer/Footer";
import { LatestArticle } from "@/components/LatestArticle";
import NavBar from "@/components/navbar/NavBar";
import { RefContainer } from "@/components/RefContainer";
import { dateFormatter } from "@/lib/dateFormatter";
import { ArticleDocument } from "@/prismicio-types";
import { components } from "@/slices";
import { PrismicText, SliceZone } from "@prismicio/react";
import Link from "next/link";
import React from "react";

export const Body = ({
  article,
  latestArticles,
  date,
}: {
  article: ArticleDocument<string>;
  latestArticles: ArticleDocument<string>[];
  date: Date;
}) => {
  const { container, height } = RefContainer();
  return (
    <>
      <div className="relative z-[1] bg-white" ref={container}>
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
        <div
          className="bg-white relative z-[1] w-[100vw] p-40"
          //@ts-ignore
          style={{ height: height }}
        ></div>
      </div>
      <Footer />
    </>
  );
};
