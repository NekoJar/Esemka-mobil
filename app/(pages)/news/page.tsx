import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";

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
