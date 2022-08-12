import { Animation } from "../baseParts/Animation";

export const CatchCopy = () => {
  return (
      <img
        src="/images/keyVisuals/sub/4-1.png"
        alt="keyvisuals-4-1"
        className="-mt-24 z-0"
      />
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
    </div>
  );
};
