import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { Bounded } from "@/components/articles/Bounded";
import { Article } from "@/components/articles/Article";

import { Layout } from "@/components/articles/Layout";
import NavBar from "@/components/navbar/NavBar";
import { Footer } from "@/components/footer/Footer";
import { useScroll, useTransform } from "framer-motion";
import { GetArticles } from "@/components/GetArticles";
import { RefContainer } from "@/components/RefContainer";
import { Body } from "./Body";

export async function generateMetadata() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    title: prismic.asText(settings.data.name),
  };
}

export default function Page() {
  return (
    <>
      <Body />
    </>
  );
}
