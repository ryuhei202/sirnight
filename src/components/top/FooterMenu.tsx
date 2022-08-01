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
        <div className="h-full w-1/4 border-r border-solid border-[#475156] flex justify-center items-center">
          <img src="/images/logos/gray.svg" className="w-[77%]" />
        </div>
        <div
          className="h-full w-1/2 flex justify-center items-center cursor-pointer"
          onClick={handleClick}
        >
          <button className="w-[26%]">
            {isOpen ? (
              <img src="/images/icons/one-line.svg" />
            ) : (
              <img src="/images/icons/hamburger-menu.svg" />
            )}
          </button>
        </div>
        <div className="h-full w-1/4 bg-themeGray text-clay text-sm flex justify-center items-center">
          <Link href="#">
            <a className="w-[77%] text-center">料金プラン</a>
          </Link>
        </div>
      </div>
    </>
  );
};
