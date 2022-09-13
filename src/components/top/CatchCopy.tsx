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
          <h2 className="text-[10vw] sm:text-5xl !leading-[1.5em] tracking-widest font-bold mt-[100px] [writing-mode:vertical-rl] text-left inline-block mx-auto">
            服選びの面倒から
            <br />
            解放されます。
          </h2>
        </Animation>
      </div>
      <div className="relative z-10 w-full overflow-hidden -mt-[28vw] sm:-mt-32">
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
