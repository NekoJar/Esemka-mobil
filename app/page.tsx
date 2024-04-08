"use client";
import { Hero } from "./components/hero/Hero";
import { ZoomParallax } from "./components/ZoomParallax";
import { News } from "./components/news/News";
import { About } from "./components/about/About";
import { Products } from "./components/products/Products";
import Image from "next/image";
import { Footer } from "./components/footer/Footer";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export default function Home() {
  const DummyContent = () => {
    return (
      <Image
        src="/assets/Esemka_Bima.jpg"
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    );
  };

  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-zinc-700 to-zinc-900">
          <p>Product Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-zinc-700 to-zinc-900">
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-zinc-700 to-zinc-900">
          <p>Playground tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-zinc-700 to-zinc-900">
          <p>Content tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-zinc-700 to-zinc-900">
          <p>Random tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <main className="bg-black">
      <Hero />
      <ZoomParallax />
      <About />
      <News />
      <div className="h-[20rem] md:h-[40rem] relative flex flex-col max-w-5xl mx-auto w-full my-40 px-4 z-10">
        <Products tabs={tabs} />
      </div>
      <div className="bg-zinc-800 py-20 px-[30rem] ">
        <Footer />
      </div>
    </main>
  );
}
