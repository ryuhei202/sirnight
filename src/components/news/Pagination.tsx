import Link from "next/link";
import { PER_PAGE } from "../../../pages/news/page/[id]";

type TProps = {
  totalCount: number;
  currentPageId: number;
};

export const Pagination = ({ totalCount, currentPageId }: TProps) => {
  const minPageId = 1;
  const maxPageId = Math.ceil(totalCount / PER_PAGE);

  return (
    <div className="flex justify-between h-14 mt-10">
      {currentPageId === minPageId ? (
        <span className="bg-[#D8D8D2] rounded-full inline-block w-14 text-center leading-[3rem]">
          <img
            src="/images/icons/right-arrow.svg"
            alt="previous-page-icon"
            className="rotate-180 align-middle inline"
          />
        </span>
      ) : (
        <Link href={`/news/page/${currentPageId - 1}`}>
          <a className="bg-[#F4F3EF] rounded-full inline-block w-14 text-center leading-[3rem]">
            <img
              src="/images/icons/right-arrow.svg"
              alt="previous-page-icon"
              className="rotate-180 align-middle inline"
            />
          </a>
        </Link>
      )}
      <div className="flex justify-center items-center">
        <div className="flex">
          <p>{currentPageId}</p>
          <span>／</span>
          <p>{maxPageId}</p>
        </div>
      </div>
      {currentPageId === maxPageId ? (
        <span className="bg-[#F4F3EF] rounded-full inline-block w-14 text-center leading-[3rem]">
          <img
            src="/images/icons/right-arrow.svg"
            alt="next-page-icon"
            className="align-middle inline"
          />
        </span>
      ) : (
        <Link href={`/news/page/${currentPageId + 1}`}>
          <a className="bg-[#F4F3EF] rounded-full inline-block w-14 text-center leading-[3rem]">
            <img
              src="/images/icons/right-arrow.svg"
              alt="next-page-icon"
              className="align-middle inline"
            />
          </a>
        </Link>
      )}
    </div>
  );
};
