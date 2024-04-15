import bima12 from "@/public/assets/Bima-1-2-transparent.png";
import bima13 from "@/public/assets/Bima-1-3-transparent.png";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export const Products = () => {
  return (
    <div className=" bg-zinc-700">
      <div>
        <div className="flex items-center justify-around bg-gradient-to-br from-zinc-200 from-40% via-zinc-500 via-90% to-zinc-700  p-64">
          <div className="text-8xl">
            <p>Bima 1.2</p>
            <Button variant="outlineNoBg" className="border-black rounded-none">
              <Link href="/products/bima-1-2" className="flex items-center">
                Learn More
                <span>
                  <ChevronRight />
                </span>
              </Link>
            </Button>
          </div>
          <Image
            src={bima12}
            alt="bima-1-2"
            width={600}
            height={600}
            className="grayscale-[20%]"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-around bg-gradient-to-br from-zinc-700 from-10% via-zinc-500 via-40% to-zinc-200 p-64">
          <Image
            src={bima13}
            alt="bima-1-3"
            width={600}
            height={600}
            className="grayscale-[20%]"
          />
          <div className="text-8xl text-white">
            <p>Bima 1.3</p>
            <Button variant="outlineNoBg" className="rounded-none">
              <Link href="/products/bima-1-3" className="flex items-center">
                Learn More
                <span>
                  <ChevronRight />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
