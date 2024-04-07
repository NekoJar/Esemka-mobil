"use client";
import { Hero } from "./components/Hero";
import { ZoomParallax } from "./components/ZoomParallax";
import { News } from "./components/News";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <ZoomParallax />
      <News />
    </main>
  );
}
