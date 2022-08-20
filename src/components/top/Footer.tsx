import Link from "next/link";

export const Footer = () => {
  return (
    <div className="py-28 bg-themeGray">
      <div className="mx-[13%] text-beige">
        <img src="/images/logos/beige.svg" alt="logo" />
        <p className="text-sm text-center mt-8 mb-16">
          服の悩みを解決する
          <br />
          メンズファッションレンタルサービス
        </p>
        <div className="flex justify-center space-x-7 pb-20 border-b-2 border-[#676F72]">
          <a
            href="https://www.instagram.com/leeapjp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/icons/instagram/primary.svg"
              alt="icon-instagram"
              className="h-[30px]"
            />
          </a>
          <a
            href="https://twitter.com/leeapjp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/icons/twitter/primary.svg"
              alt="icon-twitter"
              className="h-[30px]"
            />
          </a>
          <a
            href="https://www.facebook.com/leeapjp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/icons/facebook/primary.svg"
              alt="icon-facebook"
              className="h-[30px]"
            />
          </a>
        </div>
        <div className="flex flex-wrap font-semibold py-10 border-b-2 border-[#676F72]">
          <Link href={{ hash: "service-description" }}>
            <a className="w-1/2 my-5">UWearとは</a>
          </Link>
          <Link href={{ hash: "coordinates" }}>
            <a className="w-1/2 my-5">コーデ例</a>
          </Link>
          <Link href={{ hash: "how-to-use" }}>
            <a className="w-1/2 my-5">ご利用の流れ</a>
          </Link>
          <Link href={{ hash: "faq" }}>
            <a className="w-1/2 my-5">よくあるご質問</a>
          </Link>
          <Link href={{ hash: "news" }}>
            <a className="w-1/2 my-5">お知らせ</a>
          </Link>
        </div>
        <div className="flex flex-wrap text-xs pt-10">
          <Link href={{ pathname: "/company" }}>
            <a className="w-1/2 my-5">運営会社</a>
          </Link>
          <Link href={{ pathname: "/laws" }}>
            <a className="w-1/2 my-5">特定商取引法に基づく表示</a>
          </Link>
          <Link href={{ pathname: "/term" }}>
            <a className="w-1/2 my-5">利用規約</a>
          </Link>
          <Link href={{ pathname: "/privacy" }}>
            <a className="w-1/2 my-5">プライバシーポリシー</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
