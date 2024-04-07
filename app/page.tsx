"use client";
import { Hero } from "./components/hero/Hero";
import { ZoomParallax } from "./components/ZoomParallax";
import { News } from "./components/news/News";
import { About } from "./components/about/About";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <ZoomParallax />
      <About />
      <News />
    </main>
  );
}
