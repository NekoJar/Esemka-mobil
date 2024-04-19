"use client";
import { Hero } from "../components/hero/Hero";
import { ZoomParallax } from "../components/ui/ZoomParallax";
import { News } from "../components/news/News";
import { About } from "../components/about/About";
import { Products } from "../components/products/Products";
import { Footer } from "../components/footer/Footer";
import { TransitionProvider } from "../components/products/TransitionContext";
import { MottoText } from "@/components/MottoText";
import NavBar from "@/components/navbar/NavBar";

export default function Home() {
  return (
    <>
      <NavBar className="text-white" />
      <main className="bg-black">
        <Hero />
        <MottoText />
        <ZoomParallax />
        <About />
        <Products />
        <News />

        <Footer />
      </main>
    </>
  );
}
