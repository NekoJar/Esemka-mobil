import { ArticleSectionSliderContainer } from "./ArticleSectionSlider";
import { NewsRef } from "../NewsRef";
import { LinkButton } from "../ui/LinkButton";

export function News() {
  const { container, height, scrollYProgressCard } = NewsRef();

  return (
    <div className="bg-neutral-100 relative z-[1]">
      <div className="p-8 text-black pt-[30rem] -mb-24">
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
      <div ref={container} className="py-96 ">
        <ArticleSectionSliderContainer
          scrollYProgressCard={scrollYProgressCard}
        />
      </div>
      <div className="flex items-center justify-center -mt-[24rem]">
        <LinkButton href="/news" className="border-black text-black">
          <p>More News</p>
        </LinkButton>
      </div>
      <div
        className="bg-neutral-100 relative z-[1] w-[100vw] p-40"
        //@ts-ignore
        style={{ height }}
      ></div>
    </div>
  );
}
