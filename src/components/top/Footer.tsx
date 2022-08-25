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
          <Link href={{ hash: "about" }}>
            <a className="w-1/2 my-[4vw] sm:my-5 text-[3.5vw] sm:text-base">
              UWearとは
            </a>
          </Link>
          <Link href={{ hash: "service-value" }}>
            <a className="w-1/2 my-[4vw] sm:my-5 text-[3.5vw] sm:text-base">
              UWearで出来ること
            </a>
          </Link>
          <Link href={{ hash: "flow" }}>
            <a className="w-1/2 my-[4vw] sm:my-5 text-[3.5vw] sm:text-base">
              コーデの提供方法
            </a>
          </Link>
          <Link href={{ hash: "coordinates" }}>
            <a className="w-1/2 my-[4vw] sm:my-5 text-[3.5vw] sm:text-base">
              コーデ例
            </a>
          </Link>
          <Link href={{ hash: "how-to-start" }}>
            <a className="w-1/2 my-[4vw] sm:my-5 text-[3.5vw] sm:text-base">
              UWearのはじめ方
            </a>
          </Link>
          <Link href={{ hash: "faq" }}>
            <a className="w-1/2 my-[4vw] sm:my-5 text-[3.5vw] sm:text-base">
              よくあるご質問
            </a>
          </Link>
          <Link href={{ hash: "news" }}>
            <a className="w-1/2 my-[4vw] sm:my-5 text-[3.5vw] sm:text-base">
              お知らせ
            </a>
          </Link>
        </div>
        <div className="flex flex-wrap text-xs pt-10">
          <Link href={{ pathname: "/company" }}>
            <a className="w-1/2 my-[4vw] sm:my-5 text-[2.5vw] sm:text-base">
              運営会社
            </a>
          </Link>
          <Link href={{ pathname: "/laws" }}>
            <a className="w-1/2 my-[4vw] sm:my-5 text-[2.5vw] sm:text-base">
              特定商取引法に基づく表示
            </a>
          </Link>
          <Link href={{ pathname: "/term" }}>
            <a className="w-1/2 my-[4vw] sm:my-5 text-[2.5vw] sm:text-base">
              利用規約
            </a>
          </Link>
          <Link href={{ pathname: "/privacy" }}>
            <a className="w-1/2 my-[4vw] sm:my-5 text-[2.5vw] sm:text-base">
              プライバシーポリシー
            </a>
          </Link>
          <a
            href={`${process.env.NEXT_PUBLIC_HOST_URL}/inquiry`}
            className="w-1/2 my-[4vw] sm:my-5 text-[2.5vw] sm:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </div>
  );
};
