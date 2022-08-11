import { SlideIn } from "../baseParts/SlideIn";

export const CatchCopy = () => {
  return (
    <div className="relative w-full bg-clay text-center">
      <SlideIn options={{ threshold: 0.3, triggerOnce: true }}>
        <h2 className="relative z-30 text-4xl font-semibold tracking-[0.15em] leading-[1.5em] mt-[100px] [writing-mode:vertical-rl] text-left inline-block mx-auto">
          洋服を選ぶのが
          <br />
          苦手なあなたに。
        </h2>
      </SlideIn>
      <img
        src="/images/keyVisuals/sub/4-1.png"
        alt="keyvisuals-4-1"
        className="-mt-24 z-0"
      />
    </div>
  );
};
