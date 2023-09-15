import Image from "next/image";
import { useEffect } from "react";
import { Typography } from "../baseParts/Typography";

type TProps = {
  readonly className?: string;
};
export const OpeningPage = ({ className }: TProps) => {
  useEffect(() => {
    const logo = document.getElementById("logo");
    const text = document.getElementById("text");
    const subText = document.getElementById("sub-text");
    const opPage = document.getElementById("op-page");
    setTimeout(() => {
      logo?.classList.remove("animate-slideInOpLogo");
      logo?.classList.add("animate-slideOutOp");
      text?.classList.remove("animate-slideInOpText");
      text?.classList.add("animate-slideOutOp");
      subText?.classList.remove("animate-slideInOpSubText");
      subText?.classList.add("animate-slideOutOp");
    }, 2500);
    setTimeout(() => {
      opPage?.classList.add("animate-slideOutOp");
      opPage?.classList.add("hidden");
    }, 3000);
  }, []);

  return (
    <div
      id="op-page"
      className={`fixed inset-0 bg-clay h-screen ${className ?? ""}`}
    >
      <div className="absolute top-[41%] w-full left-1/2 translate-x-[-50%] text-center">
        <Image
          id="logo"
          src="/images/logos/gray.svg"
          alt="logo-gray"
          width={300}
          height={65}
          className="w-[60vw] sm:w-[300px] animate-slideInOpLogo mx-auto"
          priority
        />
        <Typography
          id="text"
          color="primary"
          weight="bold"
          className="text-[4vw] sm:text-xl mt-[7vw] sm:mt-7 opacity-0 animate-slideInOpText"
        >
          服選びの面倒から解放する
        </Typography>
        <Typography
          id="sub-text"
          color="primary"
          weight="bold"
          className="text-[4vw] sm:text-xl mt-[2vw] sm:mt-1 opacity-0 animate-slideInOpSubText"
        >
          メンズファッションレンタルサービス
        </Typography>
      </div>
    </div>
  );
};
