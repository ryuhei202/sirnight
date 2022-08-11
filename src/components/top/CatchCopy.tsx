import { useInView } from "react-intersection-observer";

export const CatchCopy = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
    delay: 500
  });

  return (
    <div className="relative w-full bg-clay text-center">
      <h2
        className={`z-[100] text-4xl font-semibold tracking-[0.15em] leading-[1.5em] mt-[100px] [writing-mode:vertical-rl] text-left inline-block mx-auto ${
          inView ? "animate-slideInCatchCopyText" : "opacity-0"
        }`}
        ref={ref}
      >
        洋服を選ぶのが
        <br />
        苦手なあなたに。
      </h2>
      <img
        src="/images/keyVisuals/sub/4-1.png"
        alt="keyvisuals-4-1"
        className="-mt-24"
      />
    </div>
  );
};
