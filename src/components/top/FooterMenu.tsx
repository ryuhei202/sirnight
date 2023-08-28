import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { analyzeEvent } from "../../lib/gtag";
import { Menu } from "./Menu";

export type TFooterState = "initial" | "open" | "close";

export const FooterMenu = () => {
  const router = useRouter();
  const [footerState, setFooterState] = useState<TFooterState>("initial");
  const onClickIcon = () => {
    if (footerState === "initial") {
      setFooterState("open");
    } else {
      setFooterState(footerState === "open" ? "close" : "open");
    }
  };

  const handleClickPlan = () => {
    analyzeEvent({
      action: "click",
      category: "footer_plan",
    }).then(() => router.push({ pathname: "/plan" }));
  };

  return (
    <>
      <Menu onClick={onClickIcon} footerState={footerState} />
      <div className="fixed bottom-0 h-[70px] sm:w-[638px] bg-clay flex z-40 border-t border-solid border-[#475156]">
        <Link
          href={{ pathname: "/" }}
          className="h-full w-1/4 border-r border-solid border-[#475156] flex justify-center items-center"
        >
          <Image
            src="/images/logos/gray.svg"
            alt="logo"
            className="w-[77%]"
            width={122}
            height={26}
          />
        </Link>
        <div
          className="h-full w-1/2 flex justify-center items-center cursor-pointer"
          onClick={onClickIcon}
        >
          <button className="w-[26%]">
            {footerState === "open" ? (
              <img src="/images/icons/one-line.svg" alt="one-line" />
            ) : (
              <img
                src="/images/icons/hamburger-menu.svg"
                alt="hamberger-menu"
              />
            )}
          </button>
        </div>
        <a
          onClick={handleClickPlan}
          className="h-full w-1/4 bg-themeGray text-clay text-[3.5vw] sm:text-sm flex justify-center items-center cursor-pointer"
        >
          <span className="w-[77%] text-center [font-feature-settings:'palt'on]">
            料金プラン
          </span>
        </a>
      </div>
    </>
  );
};
