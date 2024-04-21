import React from "react";
import { RefContainer } from "./RefContainer";
import Image, { StaticImageData } from "next/image";
import { Toaster } from "./ui/sonner";
import NavBar from "./navbar/NavBar";
import { BookingForm } from "./BookingForm";
import { Footer } from "./footer/Footer";

export const ProductPage = ({
  photoSrc,
  title,
  colorProduct,
}: {
  photoSrc: string | StaticImageData;
  title: string;
  colorProduct: string;
}) => {
  const { container } = RefContainer();

  return (
    <div>
      <NavBar className="text-white" />
      <div
        className="p-32 px-80 bg-gradient-to-b from-zinc-900 from-30% via-zinc-800 via-40% to-zinc-700 h-max relative z-[1]"
        ref={container}
      >
        <Toaster
          duration={3000}
          position="bottom-right"
          theme="light"
          className="font-roboto text-white"
        />
        <div className="bg-gradient-to-br from-neutral-400 to-neutral-500 p-12 flex items-center justify-between rounded-xl pl-40 pr-10 gap-4">
          <Image
            src={photoSrc}
            alt={title}
            width={400}
            height={400}
            className="grayscale-[20%]"
          />
          <div className="bg-neutral-700 border-1 border-zinc-50/20 p-14 rounded-xl w-[35rem] text-white space-y-4 backdrop-blur-md">
            <div className="border-b-[1px] pb-4">
              <p className="uppercase text-4xl">{title}</p>
              <p className="text-white/50 lowercase">{colorProduct}</p>
            </div>
            <div className="py-0">
              <BookingForm title="Bima 1.2" colorProduct={colorProduct} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
