import * as prismic from "@prismicio/client";

import { Bounded } from "@/components/articles/Bounded";
import { PrismicRichText } from "@/components/articles/PrismicRichText";

const Text = ({ slice }) => {
  return (
    <Bounded as="section">
      {prismic.isFilled.richText(slice.primary.text) && (
        <div className="font-serif leading-relaxed md:text-xl md:leading-relaxed">
          <PrismicRichText field={slice.primary.text} />
        </div>
      )}
    </Bounded>
  );
};

export default Text;
