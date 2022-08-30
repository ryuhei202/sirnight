import { ReactNode } from "react";

type TProps = {
  number: number;
  imagePath: string;
  title: ReactNode;
};

export const StepUse = ({ number, imagePath, title }: TProps) => {
  return (
    <li className="flex-none w-full snap-always snap-center text-center relative mx-auto">
      <p className="font-lora font-semibold">STEP 0{number}</p>
      <p className="mx-auto mt-0.5 w-[5%] h-[1px] border-b border-dashed border-themeGray"></p>
      <p className="mt-5 font-semibold text-[3.7vw] sm:text-xl">{title}</p>
      {number === 3 ? (
        <div className="rounded-[15px] mt-7 h-[120vw] sm:h-[83.5%] absolute overflow-hidden">
          <img
            src={imagePath}
            alt={`howToUse-${number}`}
            className="rounded-[15px] animate-infiniteScrollStepUse"
          />
        </div>
      ) : (
        <img
          src={imagePath}
          alt={`howToUse-${number}`}
          className="rounded-[15px] mt-7 sm:h-fit block mx-auto"
        />
      )}
    </li>
  );
};
