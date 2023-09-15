import Link from "next/link";
import { COMPANY_PATHS } from "../../lib/microCMS/uwearClient";
import { TFooterState } from "./FooterMenu";

type TProps = {
  onClick: () => void;
  footerState: TFooterState;
};

export const Menu = ({ onClick, footerState }: TProps) => {
  return (
    <div
      id="menu"
      className={`fixed top-0 z-40 overflow-auto px-[13%] h-[calc(100vh_-_70px)] sm:w-[638px] sm:px-[66px] bg-clay text-themeGray ${
        footerState === "initial"
          ? "hidden"
          : footerState === "open"
          ? "animate-slideFromBottom"
          : "animate-slideToBottom"
      }`}
    >
      <div className="font-medium sm:text-xl mt-16 border-b-2 border-[#D8D8D2] border-solid">
        <Link
          href={{
            pathname: "/",
            hash: "about",
          }}
          onClick={onClick}
          className="my-[8vw] sm:my-10 block"
        >
          UWearとは
        </Link>
        <Link
          href={{
            pathname: "/",
            hash: "service-value",
          }}
          onClick={onClick}
          className="my-[8vw] sm:my-10 block"
        >
          UWearで出来ること
        </Link>
        <Link
          href={{
            pathname: "/",
            hash: "flow",
          }}
          onClick={onClick}
          className="my-[8vw] sm:my-10 block"
        >
          コーデの提供方法
        </Link>
        <Link
          href={{
            pathname: "/",
            hash: "coordinates",
          }}
          onClick={onClick}
          className="my-[8vw] sm:my-10 block"
        >
          コーデ例
        </Link>
        <Link
          href={{
            pathname: "/",
            hash: "how-to-start",
          }}
          onClick={onClick}
          className="my-[8vw] sm:my-10 block"
        >
          UWearのはじめ方
        </Link>
        <Link
          href={{
            pathname: "/",
            hash: "faq",
          }}
          onClick={onClick}
          className="my-[8vw] sm:my-10 block"
        >
          よくあるご質問
        </Link>
        <Link
          href={{
            pathname: "/",
            hash: "news",
          }}
          onClick={onClick}
          className="my-[8vw] sm:my-10 block"
        >
          お知らせ
        </Link>
      </div>
      <div className="flex flex-wrap text-xs py-[5vw] sm:py-5 border-b-2 border-[#D8D8D2] border-solid">
        <Link
          href={COMPANY_PATHS.COMPANY}
          onClick={onClick}
          className="w-1/3 my-[3vw] sm:my-5 text-[3vw] sm:text-sm"
        >
          運営会社
        </Link>
        <Link
          href={COMPANY_PATHS.LAWS}
          onClick={onClick}
          className="w-2/3 my-[3vw] sm:my-5 text-[3vw] sm:text-sm"
        >
          特定商取引法に基づく表示
        </Link>
        <Link
          href={COMPANY_PATHS.TERM}
          onClick={onClick}
          className="w-1/3 my-[3vw] sm:my-5 text-[3vw] sm:text-sm"
        >
          利用規約
        </Link>
        <Link
          href={COMPANY_PATHS.PRIVACY}
          onClick={onClick}
          className="w-2/3 my-[3vw] sm:my-5 text-[3vw] sm:text-sm"
        >
          プライバシーポリシー
        </Link>
        <a
          href={`${process.env.NEXT_PUBLIC_HOST_URL}/inquiry`}
          className="w-2/3 my-[3vw] sm:my-5 text-[3vw] sm:text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          お問い合わせ
        </a>
      </div>
      <div className="flex space-x-7 pt-10 pb-14">
        <a
          href="https://www.instagram.com/UWearJP/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/icons/instagram/secondary.svg"
            alt="icon-instagram"
            className="h-[20px] fill-[#ffffff]"
          />
        </a>
        <a
          href="https://twitter.com/UWearJP"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/icons/twitter/secondary.svg"
            alt="icon-twitter"
            className="h-[20px]"
          />
        </a>
        <a
          href="https://www.facebook.com/UWearJP/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/icons/facebook/secondary.svg"
            alt="icon-facebook"
            className="h-[20px]"
          />
        </a>
      </div>
    </div>
  );
};
