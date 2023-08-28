import Image from "next/image";
import { ReactNode } from "react";
import { Animation } from "../baseParts/Animation";

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
  return (
    <Animation options={{ threshold: 1, triggerOnce: true }}>
      <div
        className={`bg-clay flex flex-row p-7 mt-7 ${
          illustPosition === "right" ? "" : "justify-end"
        }`}
      >
        {illustPosition === "right" ? (
          <>
            <div className="w-2/5">
              <p className="font-lora text-primary text-[3vw] sm:text-sm w-fit mx-auto border-b border-dashed border-themeGray ">
                Point
              </p>
              <h4 className="[writing-mode:vertical-rl] mx-auto text-[4vw] sm:text-xl pt-5 font-medium tracking-widest leading-7 sm:!leading-8">
                {content}
              </h4>
            </div>
            <Image
              src={imagePath}
              alt="points-illust"
              className="w-[55%] object-cover"
              width={320}
              height={300}
            />
          </>
        ) : (
          <>
            <Image
              src={imagePath}
              alt="points-illust"
              className="w-[55%] object-cover"
              width={320}
              height={300}
            />
            <div className="w-2/5">
              <p className="font-lora text-primary text-[3vw] sm:text-sm w-fit mx-auto border-b border-dashed border-themeGray">
                Point
              </p>
              <h4 className="[writing-mode:vertical-rl] mx-auto text-[4vw] sm:text-xl pt-5 font-medium tracking-widest leading-7 sm:!leading-8">
                {content}
              </h4>
            </div>
          </>
        )}
      </div>
    </Animation>
  );
};
