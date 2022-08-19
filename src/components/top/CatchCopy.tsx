import { Animation } from "../baseParts/Animation";

export const CatchCopy = () => {
  return (
    <div className="w-full bg-clay text-center">
      <div className="relative z-20">
        <Animation options={{ threshold: 1, triggerOnce: true }}>
          <h2 className="text-4xl font-semibold tracking-[0.15em] leading-[1.5em] mt-[100px] [writing-mode:vertical-rl] text-left inline-block mx-auto">
            洋服を選ぶのが
            <br />
            苦手なあなたに。
          </h2>
        </Animation>
      </div>
      <div className="relative z-10 w-full overflow-hidden -mt-24">
        <Animation
          options={{ threshold: 0.4, triggerOnce: true }}
          animationClassName="animate-shrink"
          preAnimationClassName="scale-125"
        >
          <img
            src="/images/keyVisuals/sub/1.webp"
            alt="catchcopy-1"
            className="origin-top"
          />
        </Animation>
      </div>
    </div>
  );
};
