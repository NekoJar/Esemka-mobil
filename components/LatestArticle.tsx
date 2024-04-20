import * as prismic from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import { ArticleDocument } from "@/prismicio-types";
import { dateFormatter } from "@/lib/dateFormatter";

export function LatestArticle({
  article,
}: {
  article: ArticleDocument<string>;
}) {
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
