import { useCallback, useEffect, useRef, useState } from "react";

export const CatchCopy = () => {
  const [isDisplay, setIsDisplay] = useState(false);
  const isAnimated = useRef(false);
  const toggleIsDisplay = useCallback(() => {
    if (isAnimated.current) return;
    if (window.scrollY > 110) {
      isAnimated.current = true;
      setIsDisplay(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", toggleIsDisplay);
    return () => window.removeEventListener("scroll", toggleIsDisplay);
  }, []);

  return (
    <div className="relative w-full h-[1000px] bg-clay text-center">
      <h2
        className={`absolute z-10 text-themeGray text-4xl font-semibold tracking-[0.15em] leading-[1.5em] top-[100px] [writing-mode:vertical-rl] text-left inline-block ${
          isDisplay ? "animate-slideInCatchCopyText" : "hidden"
        }`}
      >
        洋服を選ぶのが
        <br />
        苦手なあなたに。
      </h2>
      <img
        src="/images/keyVisuals/sub/4-1.svg"
        alt="keyvisuals-4-1"
        className="absolute top-[335px]"
      />
    </div>
  );
};
