import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText as BasePrismicRichText } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { Heading } from "./Heading";
import { ReactNode } from "react";

/** @type {import("@prismicio/react").JSXMapSerializer} */
const defaultComponents = {
  heading1: ({ children }: { children: ReactNode }) => (
    <Heading as="h2" size="3xl" className="mb-7 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  heading2: ({ children }: { children: ReactNode }) => (
    <Heading as="h3" size="2xl" className="mb-7 last:mb-0">
      {children}
    </Heading>
  ),
  heading3: ({ children }: { children: ReactNode }) => (
    <Heading as="h4" size="xl" className="mb-7 last:mb-0">
      {children}
    </Heading>
  ),
  paragraph: ({ children }: { children: ReactNode }) => (
    <p className="mb-7 last:mb-0">{children}</p>
  ),
  oList: ({ children }: { children: ReactNode }) => (
    <ol className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ol>
  ),
  oListItem: ({ children }: { children: ReactNode }) => (
    <li className="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  list: ({ children }: { children: ReactNode }) => (
    <ul className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ul>
  ),
  listItem: ({ children }: { children: ReactNode }) => (
    <li className="mb-1 list-disc pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  preformatted: ({ children }: { children: ReactNode }) => (
    <pre className="mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }: { children: ReactNode }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  hyperlink: ({ children, node }: { children: ReactNode; node: any }) => (
    <PrismicNextLink
      field={node.data}
      className="underline decoration-1 underline-offset-2"
    >
      {children}
    </PrismicNextLink>
  ),
};

export function PrismicRichText({ components, ...props }: { components: any }) {
  return (
    //@ts-ignore
    <BasePrismicRichText
      components={{ ...defaultComponents, ...components }}
      {...props}
    />
  );
}
