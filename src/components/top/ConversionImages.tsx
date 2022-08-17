import { Animation } from "../baseParts/Animation";

type TProps = {
  leftImagePath: string;
  rightImagePath: string;
};

export const ConversionImages = ({ leftImagePath, rightImagePath }: TProps) => {
  return (
    <div className="w-full h-auto relative z-0">
      <Animation
        animationClassName="animate-rotatePositive origin-[50%_300%]"
        preAnimationClassName="opacity-0"
        options={{ threshold: 1, triggerOnce: true }}
      >
        <img
          src={leftImagePath}
          alt="conversion"
          className="w-4/5 mx-auto rotate-6 relative -z-10"
        />
      </Animation>
      <div className="absolute inset-0">
        <Animation
          animationClassName="animate-rotateNegative origin-[50%_300%]"
          preAnimationClassName="opacity-0"
          options={{ threshold: 1, triggerOnce: true, delay: 500 }}
        >
          <img
            src={rightImagePath}
            alt="conversion"
            className="w-4/5 mx-auto -rotate-6 relative z-0 transition"
          />
        </Animation>
      </div>
    </div>
  );
};
