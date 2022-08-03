import Link from "next/link";
import { useState } from "react";
import { Menu } from "./Menu";

export const FooterMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen ? <Menu onClick={handleClick} /> : <></>}
      <div className="fixed bottom-0 h-[70px] w-[inherit] bg-clay flex z-40 border-t border-solid border-[#475156]">
        <Link href="/">
          <a className="h-full w-1/4 border-r border-solid border-[#475156] flex justify-center items-center">
            <img src="/images/logos/gray.svg" alt="logo" className="w-[77%]" />
          </a>
        </Link>
        <div
          className="h-full w-1/2 flex justify-center items-center cursor-pointer"
          onClick={handleClick}
        >
          <button className="w-[26%]">
            {isOpen ? (
              <img src="/images/icons/one-line.svg" alt="one-line" />
            ) : (
              <img
                src="/images/icons/hamburger-menu.svg"
                alt="hamberger-menu"
              />
            )}
          </button>
        </div>
        <Link href="/plan">
          <div className="h-full w-1/4 bg-themeGray text-clay text-sm flex justify-center items-center cursor-pointer">
            <a className="w-[77%] text-center">料金プラン</a>
          </div>
        </Link>
      </div>
    </>
  );
};
