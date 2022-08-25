import { ReactNode } from "react";

type TProps = {
  number: number;
  imagePath: string;
  title: ReactNode;
};

export const StepUse = ({ number, imagePath, title }: TProps) => {
  return (
    <li className="flex-none w-full snap-always snap-center text-center">
      <p className="font-lora font-semibold">STEP 0{number}</p>
      <p className="mx-auto mt-0.5 w-[5%] h-[1px] border-b border-dashed border-themeGray"></p>
      <p className="mt-5 font-semibold text-[4vw] sm:text-xl">{title}</p>
      <img src={imagePath} alt="howToUse1-1" className="rounded-[15px] mt-7" />
    </li>
  );
};
