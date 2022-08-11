import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

type TProps = {
  illustPosition: "right" | "left";
  imagePath: string;
  content: ReactNode;
};

export const ServicePoint = ({
  illustPosition,
  imagePath,
  content,
}: TProps) => {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
    delay: 500,
  });

  return (
    <div
      ref={ref}
      className={`bg-clay flex flex-row p-7 mt-7 ${
        illustPosition === "right" ? "" : "justify-end"
      } ${inView ? "animate-slideIn" : "opacity-0"}`}
    >
      {illustPosition === "right" ? (
        <>
          <div className="w-2/5">
            <p className="text-primary text-xs w-fit mx-auto border-b-2 border-dotted border-themeGray">
              Point
            </p>
            <h4 className="[writing-mode:vertical-rl] mx-auto text-xl pt-4 font-semibold">
              {content}
            </h4>
          </div>
          <img
            src={imagePath}
            alt="points-illust"
            className="h-[280px] absolute top-1 right-0 sm:right-5 mix-blend-darken"
          />
        </>
      ) : (
        <>
          <img
            src={imagePath}
            alt="points-illust"
            className="h-[280px] absolute top-1 left-0 sm:left-5 mix-blend-darken"
          />
          <div className="w-2/5">
            <p className="text-primary text-xs w-fit mx-auto border-b-2 border-dotted border-themeGray">
              Point
            </p>
            <h4 className="[writing-mode:vertical-rl] mx-auto text-xl pt-4 font-semibold">
              {content}
            </h4>
          </div>
        </>
      )}
    </div>
  );
};
