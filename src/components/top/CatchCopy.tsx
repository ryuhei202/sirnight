import { useAnimate } from "../../hooks/useAnimate";
import { Animation } from "../baseParts/Animation";

export const CatchCopy = () => {
  useAnimate({
    id: "#catchcopy",
    from: { scale: 2 },
    to: {
      scale: 1,
      scrollTrigger: {
        trigger: "#catchcopy",
        start: "top 80%",
        end: "top 30%",
        scrub: 3,
        markers: false,
        once: true,
      },
    },
  });

  return (
    <div className="w-full bg-clay text-center">
      <div className="relative z-20">
        <Animation options={{ threshold: 1, triggerOnce: true }}>
          <h2 className="text-[10vw] sm:text-4xl font-semibold tracking-widest leading-[1.5em] mt-[100px] [writing-mode:vertical-rl] text-left inline-block mx-auto">
            洋服を選ぶのが
            <br />
            苦手なあなたに。
          </h2>
        </Animation>
      </div>
      <div className="relative z-10 w-full overflow-hidden -mt-24">
        <img
          id="catchcopy"
          src="/images/keyVisuals/sub/1.webp"
          alt="catchcopy-1"
          className="origin-top"
        />
      </div>
    </div>
  );
};
