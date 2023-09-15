import Link from "next/link";
import React from "react";

type TProps = {
  readonly lists?: {
    name: string;
    path?: string;
  }[];
  readonly className?: string;
};
export const Breadcrumb = ({ lists, className }: TProps) => {
  return (
    <div
      className={`w-full whitespace-nowrap truncate p-3 h-10 text-[#979B9A] text-xs flex border-b border-[#D8D8D2] space-x-3 ${
        className ?? ""
      }`}
    >
      <div className="flex">
        <img
          src="/images/icons/home.svg"
          alt="icon-home"
          width="14vw"
          height="auto"
          className="mr-1"
        />
        <Link href="/" className="mr-[3vw] sm:mr-0">
          トップ
        </Link>
      </div>
      {lists &&
        lists.map((list, index) => (
          <React.Fragment key={index}>
            <img
              src="/images/icons/right-arrow.svg"
              alt="arrow-icon"
              width="7vw"
              className=""
            />
            <div className="flex">
              {list.path ? (
                <>
                  <Link href={list.path}>{list.name}</Link>
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
