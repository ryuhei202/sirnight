import { ReactNode } from "react";

type TProps = {
  number: number;
  title: string;
  subTitle: ReactNode;
  className?: string;
};

export const StepStart = ({ number, title, subTitle, className }: TProps) => {
  return (
    <li className={`flex-none w-fit snap-always snap-center p-2 ${className}`}>
      <img
        src={`/images/howToStart/${number}.webp`}
        alt={`howToStart-${number}`}
        className="w-[75vw]"
      />
      <div className="mt-9">
        <p className="font-lora text-[4vw] sm:text-base font-semibold">
          STEP 0{number}
        </p>
        <p className="mx-auto mt-0.5 w-[5%] h-[1px] border-b border-dashed border-themeGray"></p>
        <p className="mt-4 text-[4vw] sm:text-xl font-semibold">{title}</p>
        <p className="font-hiragino400 mt-3 text-[2.75vw] sm:text-base">
          {subTitle}
        </p>
      </div>
    </li>
  );
};