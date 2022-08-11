import { ReactNode } from "react";
import { SlideIn } from "../baseParts/SlideIn";

type TProps = {
  content: ReactNode;
  status: string;
  type: "right" | "left";
};

export const Worry = ({ content, status, type }: TProps) => {
  const animationClassName =
    type === "right" ? "animate-slideInRightSide" : "animate-slideInLeftSide";

  return (
    <SlideIn
      animationClassName={animationClassName}
      options={{ threshold: 1, triggerOnce: true, delay: 500 }}
    >
      <p
        className={`bg-[#F4F3EF] rounded-[16px] p-5 min-w-[50%] w-fit ${
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
    </SlideIn>
  );
};
