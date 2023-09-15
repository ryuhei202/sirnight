import { ReactNode } from "react";
import { Animation } from "../baseParts/Animation";

type TProps = {
  content: ReactNode;
  type: "right" | "left";
};

export const Worry = ({ content, type }: TProps) => {
  const animationClassName =
    type === "right" ? "animate-slideInRightSide" : "animate-slideInLeftSide";

  return (
    <Animation
      animationClassName={animationClassName}
      options={{ threshold: 1, triggerOnce: true }}
    >
      <div className="w-full">
        <p
          className={`rounded-[16px] p-5 min-w-[50%] [font-feature-settings:'palt'on] ${
            type === "right"
              ? "bg-[#F4F3EF] w-full"
              : "mr-auto bg-themeGray text-beige w-fit text-lg font-bold"
          }`}
        >
          {content}
        </p>
      </div>
    </Animation>
  );
};
