"use client";
import { Hero } from "./components/Hero";
import { ZoomParallax } from "./components/ZoomParallax";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <ZoomParallax />
    </main>
  );
}
