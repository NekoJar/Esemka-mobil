import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext, useRef } from "react";
import { TransitionContext } from "./TransitionContext";

export default function Descriptions() {
  //@ts-ignore
  const { timeline } = useContext(TransitionContext);
  const container = useRef(null);
  const image = useRef();

  useGSAP(
    () => {
      const targets = gsap.utils.toArray(["p", image.current]);
      gsap.fromTo(
        targets,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.25 }
      );
      timeline.add(gsap.to(container.current, { opacity: 0 }));
    },
    { scope: container }
  );

  return (
    <div ref={container} className="h-[100vh] flex">
      <div className="h-[100vh] w-full flex flex-col justify-center items-start gap-5">
        <p className="text-[5vw]">Projects</p>
        <p className="max-w-[50%] text-start">
          Sed ut rhoncus nibh. Cras eleifend tellus a enim sodales, a efficitur
          odio euismod. Aenean non consequat lectus. Interdum et malesuada fames
          ac ante ipsum primis in faucibus. Fusce quis eleifend ipsum, sit amet
          posuere ligula.
        </p>
        <p className="max-w-[50%] text-start">
          Fusce quis eleifend ipsum, sit amet posuere ligula.
        </p>
      </div>
    </div>
  );
}
