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
      <div className="my-2">
        <p
          className={`rounded-[16px] p-5 min-w-[50%] max-w-[85%] w-fit [font-feature-settings:'palt'on] ${
            type === "right"
              ? "ml-auto bg-[#F4F3EF]"
              : "mr-auto bg-themeGray text-beige"
          }`}
        >
          {content}
        </p>
      </div>
    </Animation>
  );
};
