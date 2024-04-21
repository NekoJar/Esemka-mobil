"use client";
import { ProductPage } from "@/components/ProductPage";
import { RefContainer } from "@/components/RefContainer";
import bima12 from "@/public/assets/Bima-1-2-transparent.png";

const Bima12Page = () => {
  const { container } = RefContainer();

  return (
    <>
      <ProductPage photoSrc={bima12} title="Bima 1.2" colorProduct="white" />
    </>
  );
};

export default Bima12Page;
