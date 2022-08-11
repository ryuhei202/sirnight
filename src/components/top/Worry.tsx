import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

type TProps = {
  content: ReactNode;
  status: string;
  type: "right" | "left";
};

export const Worry = ({ content, status, type }: TProps) => {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: !true,
    delay: 500,
  });
  const animateClass =
    type === "right" ? "animate-slideInRightSide" : "animate-slideInLeftSide";

  return (
    <div ref={ref} className={`mb-7 ${inView ? animateClass : "opacity-0"}`}>
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
    </div>
  );
};
