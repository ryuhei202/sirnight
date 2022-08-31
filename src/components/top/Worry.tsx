import { ReactNode } from "react";
import { Animation } from "../baseParts/Animation";

type TProps = {
  content: ReactNode;
  status: string;
  type: "right" | "left";
};

export const Worry = ({ content, status, type }: TProps) => {
  const animationClassName =
    type === "right" ? "animate-slideInRightSide" : "animate-slideInLeftSide";

  return (
    <Animation
      animationClassName={animationClassName}
      options={{ threshold: 1, triggerOnce: true }}
    >
      <div className="my-3">
        <p
          className={`bg-[#F4F3EF] rounded-[16px] p-5 min-w-[50%] w-fit [font-feature-settings:'palt'on] ${
            type === "right" ? "ml-auto" : "mr-auto"
          }`}
        >
          {content}
        </p>
        <p
          className={`text-xs w-fit ${
            type === "right" ? "ml-auto" : "mr-auto"
          } mt-2`}
        >
          {status}
        </p>
      </div>
    </Animation>
  );
};
