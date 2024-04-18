import { BookingForm } from "@/components/BookingForm";
import { Button } from "@/components/ui/button";
import bima13 from "@/public/assets/Bima-1-3-transparent.png";
import Image from "next/image";
import React from "react";

const Bima12Page = () => {
  return (
    <div>
      <div className="p-32 px-80 bg-gradient-to-b from-zinc-900 from-30% via-zinc-800 via-40% to-zinc-700 h-max">
        <div className="bg-gradient-to-br from-neutral-400 to-neutral-500 p-12 flex items-center justify-between rounded-xl pl-40 pr-10 gap-4">
          <Image
            src={bima13}
            alt="bima-1-3"
            width={400}
            height={400}
            className="grayscale-[20%]"
          />
          <div className="bg-neutral-700 border-1 border-zinc-50/20 p-14 rounded-xl w-[35rem] text-white space-y-4 backdrop-blur-md">
            <div className="border-b-[1px] pb-4">
              <p className="uppercase text-4xl">Bima 1.3</p>
              <p className="text-white/50 lowercase ">white</p>
            </div>
            <div className="py-0">
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bima12Page;
