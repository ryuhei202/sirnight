import Link from "next/link";
import { useState } from "react";
import { analyzeEvent } from "../../lib/gtag";
import { Menu } from "./Menu";

export type TFooterState = "initial" | "open" | "close";

export const FooterMenu = () => {
  const [footerState, setFooterState] = useState<TFooterState>("initial");
  const onClickIcon = () => {
    if (footerState === "initial") {
      setFooterState("open");
    } else {
      setFooterState(footerState === "open" ? "close" : "open");
    }
  };

  const onClickPlan = () => {
    analyzeEvent({
      action: "click",
      category: "to_plan",
      label: "footer_menu",
    });
  };

  return (
    <>
      <Menu onClick={onClickIcon} footerState={footerState} />
      <div className="fixed bottom-0 h-[70px] sm:w-[498px] bg-clay flex z-40 border-t border-solid border-[#475156]">
        <Link href={{ pathname: "/" }}>
          <a className="h-full w-1/4 border-r border-solid border-[#475156] flex justify-center items-center">
            <img src="/images/logos/gray.svg" alt="logo" className="w-[77%]" />
          </a>
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
        <Link href={{ pathname: "/plan" }}>
          <a
            onClick={onClickPlan}
            className="h-full w-1/4 bg-themeGray text-clay text-[3.5vw] sm:text-sm flex justify-center items-center"
          >
            <span className="w-[77%] text-center [font-feature-settings:'palt'on]">
              料金プラン
            </span>
          </a>
        </Link>
      </div>
    </>
  );
};
