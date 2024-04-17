"use client";
import { Hero } from "../components/hero/Hero";
import { ZoomParallax } from "../components/ui/ZoomParallax";
import { News } from "../components/news/News";
import { About } from "../components/about/About";
import { Products } from "../components/products/Products";
import { Footer } from "../components/footer/Footer";
import { TransitionProvider } from "../components/products/TransitionContext";
import { MottoText } from "@/components/MottoText";

export default function Home() {
  return (
    <TransitionProvider>
      <main className="bg-black">
        <Hero />
        <Products />
        <MottoText />
        <ZoomParallax />
        <About />
        <News />
        <div className="bg-zinc-800 py-10 px-16 ">
          <Footer />
        </div>
      </main>
    </TransitionProvider>
  );
}
