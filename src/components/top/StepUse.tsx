import { ReactNode } from "react";

type TProps = {
  number: number;
  imagePath: string;
  title: ReactNode;
  className?: string;
};

export const StepUse = ({ number, imagePath, title, className }: TProps) => {
  return (
    <li className={`flex-none w-fit snap-always snap-center p-3 ${className}`}>
      <div className="w-[80%] text-center mx-auto">
        <span className="font-lora font-semibold">STEP 0{number}</span>
        <hr className="w-[5%] mx-auto mt-0.5 h-[1px] border-b border-dashed border-white"></hr>
        <span className="mt-5 font-semibold text-[3.7vw] sm:text-xl">
          {title}
        </span>
      </div>
      <img
        src={imagePath}
        alt={`howToUse-${number}`}
        className="rounded-[15px] mt-7 block mx-auto w-[80vw] sm:w-[80%]"
      />
    </li>
  );
};
