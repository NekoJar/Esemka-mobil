"use client";
import { Footer } from "@/components/footer/Footer";
import { GetArticles } from "@/components/GetArticles";
import NavBar from "@/components/navbar/NavBar";
import { RefContainer } from "@/components/RefContainer";
import React from "react";

export const Body = () => {
  const { container, height } = RefContainer();
  return (
    <>
      <div className="relative z-[1] bg-white" ref={container}>
        <NavBar />
        <div className="space-y-32 pb-32 ">
          <div className="p-8 text-black">
            <p className="uppercase text-[16rem] flex">News</p>
            <div className="flex justify-between pt-14 -mt-16 border-t-[1px] border-black">
              <ul className="italic lowercase space-x-96 flex">
                <li>karya</li>
                <li>anak</li>
                <li>bangsa</li>
              </ul>
              <p className="text-black/50">(2024)</p>
            </div>
          </div>
          <GetArticles />
        </div>
        <div
          className="bg-white relative z-[1] w-[100vw] p-40"
          //@ts-ignore
          style={{ height: height }}
        ></div>
      </div>

      <Footer />
    </>
  );
};
