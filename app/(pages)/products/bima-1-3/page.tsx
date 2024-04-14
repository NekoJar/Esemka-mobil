import { Button } from "@/components/ui/button";
import bima13 from "@/public/assets/Bima-1-3-transparent.png";
import Image from "next/image";
import React from "react";

const Bima13Page = () => {
  return (
    <div>
      <div className="p-32 px-80 bg-gradient-to-b from-zinc-900 from-30% via-zinc-800 via-40% to-zinc-700 h-[100vh]">
        <div className="bg-neutral-400 p-12 flex items-center justify-between rounded-xl pl-40 pr-20 gap-4">
          <Image
            src={bima13}
            alt="bima-1-3"
            width={400}
            height={400}
            className="grayscale-[20%]"
          />
          <div className="bg-neutral-700 border-1 border-zinc-50/20 p-12 rounded-xl h-[70vh] w-[30rem] text-white space-y-4">
            <div className="border-b-1 pb-4">
              <p className="uppercase text-4xl">Bima 1.3</p>
              <p className="text-white/50 lowercase ">white</p>
            </div>
            <div className="border-b-1 space-y-4 pb-4">
              <p className=" text-lg text-white/70">Colour</p>
              <Button variant="outline" className="">
                <p className="flex items-center text-white/50 lowercase gap-4">
                  <span className="p-2 bg-white rounded-full border-none"></span>
                  White
                </p>
              </Button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bima13Page;
