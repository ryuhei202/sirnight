import { useRouter } from "next/router";
import { useEffect } from "react";
import { Typography } from "../baseParts/Typography";

type TProps = {
  readonly className?: string;
};
export const OpeningPage = ({ className }: TProps) => {
  const router = useRouter();

  useEffect(() => {
    const logo = document.getElementById("logo") as HTMLElement;
    const text = document.getElementById("text") as HTMLElement;
    const subText = document.getElementById("sub-text") as HTMLElement;
    const opPage = document.getElementById("op-page") as HTMLElement;
    setTimeout(() => {
      logo.classList.remove("animate-slideInOpLogo");
      logo.classList.add("animate-slideOutOp");
      text.classList.remove("animate-slideInOpText");
      text.classList.add("animate-slideOutOp");
      subText.classList.remove("animate-slideInOpSubText");
      subText.classList.add("animate-slideOutOp");
    }, 2500);
    setTimeout(() => {
      opPage.classList.add("animate-slideOutOp");
      opPage.classList.add("hidden");
    }, 3000);
  }, []);

  if (router.asPath !== "/") return <></>;

  return (
    <div
      id="op-page"
      className={`fixed inset-0 bg-clay h-screen ${className ?? ""}`}
    >
      <div className="absolute top-[41%] left-1/2 translate-x-[-50%] w-[65%] text-center">
        <img
          id="logo"
          src="/images/logos/gray.svg"
          alt="logo-gray"
          className="animate-slideInOpLogo mx-auto"
        />
        <Typography
          id="text"
          size="sm"
          className="mt-6 opacity-0 animate-slideInOpText"
        >
          服の悩みを解決する
        </Typography>
        <Typography
          id="sub-text"
          size="sm"
          className="opacity-0 animate-slideInOpSubText"
        >
          メンズファッションレンタルサービス
        </Typography>
      </div>
    </div>
  );
};
