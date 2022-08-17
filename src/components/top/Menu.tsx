import Link from "next/link";

type TProps = {
  onClick: () => void;
};

export const Menu = ({ onClick }: TProps) => {
  return (
    <div className="fixed top-0 z-40 h-[calc(100vh_-_70px)] overflow-auto  px-[13%] sm:w-[500px] sm:px-[66px] bg-clay text-themeGray">
      <div className="font-semibold text-xl mt-16 mb-5 border-b-2 border-[#D8D8D2] border-solid">
        <Link href="/#service-description">
          <a onClick={onClick} className="my-10 block">
            UWearとは
          </a>
        </Link>
        <Link href="/#">
          <a onClick={onClick} className="my-10 block">
            スタイリスト紹介
          </a>
        </Link>
        <Link href="/#coordinates">
          <a onClick={onClick} className="my-10 block">
            コーデ例
          </a>
        </Link>
        <Link href="/#how-to-use">
          <a onClick={onClick} className="my-10 block">
            ご利用の流れ
          </a>
        </Link>
        <Link href="/#faq">
          <a onClick={onClick} className="my-10 block">
            よくあるご質問
          </a>
        </Link>
        <Link href="/#news">
          <a onClick={onClick} className="my-10 block">
            お知らせ
          </a>
        </Link>
      </div>
      <div className="flex flex-wrap text-xs pb-5 border-b-2 border-[#D8D8D2] border-solid">
        <Link href="/company">
          <a className="w-[50%] my-5">運営会社</a>
        </Link>
        <Link href="/laws">
          <a className="w-[50%] my-5">特定商取引法に基づく表示</a>
        </Link>
        <Link href="/term">
          <a className="w-[50%] my-5">利用規約</a>
        </Link>
        <Link href="/privacy">
          <a className="w-[50%] my-5">プライバシーポリシー</a>
        </Link>
      </div>
      <div className="flex space-x-7 pt-10 pb-14">
        <a
          href="https://www.instagram.com/leeapjp/"
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
          href="https://twitter.com/leeapjp"
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
          href="https://www.facebook.com/leeapjp/"
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
