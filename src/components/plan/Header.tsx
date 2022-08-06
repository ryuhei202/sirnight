import Link from "next/link";
import React from "react";

type TProps = {
  readonly lists?: {
    name: string;
    path?: string;
  }[];
};
export const Header = ({ lists }: TProps) => {
  return (
    <div className="w-full p-3 h-10 text-[#979B9A] text-xs flex border-b-2 border-[#D8D8D2]">
      <div className="flex w-14">
        <img src="/images/icons/home.svg" alt="icon-home" className="w-1/3" />
        <Link href="/">
          <a>トップ</a>
        </Link>
      </div>
      {lists &&
        lists.map((list) => (
          <React.Fragment>
            <div className="mx-3">＞</div>
            <div className="flex">
              {list.path ? (
                <>
                  <Link href={list.path}>
                    <a>{list.name}</a>
                  </Link>
                </>
              ) : (
                <p>{list.name}</p>
              )}
            </div>
          </React.Fragment>
        ))}
    </div>
  );
};
