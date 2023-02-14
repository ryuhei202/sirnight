import Link from "next/link";

export const Footer = () => {
  return (
    <div className="py-28 bg-themeGray">
      <div className="mx-[13%] text-beige">
        <img src="/images/logos/beige.svg" alt="logo" />
        <p className="text-sm text-center mt-8 mb-16">
          服選びの面倒から解放する
          <br />
          メンズファッションレンタルサービス
        </p>
        <div className="flex justify-center space-x-7 pb-20 border-b-2 border-[#676F72]">
          <a
            href="https://www.instagram.com/UWearJP/"
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
            href="https://twitter.com/UWearJP"
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
            href="https://www.facebook.com/UWearJP/"
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
        <div className="flex flex-wrap font-medium py-10 border-b-2 border-[#676F72]">
          <Link
            href={{ hash: "about" }}
            className="w-1/2 my-[4vw] sm:my-5 text-[3.5vw] sm:text-base">
            
              UWearとは
            
          </Link>
          <Link
            href={{ hash: "service-value" }}
            className="w-1/2 my-[4vw] sm:my-5 text-[3.5vw] sm:text-base">
            
              UWearで出来ること
            
          </Link>
          <Link
            href={{ hash: "flow" }}
            className="w-1/2 my-[4vw] sm:my-5 text-[3.5vw] sm:text-base">
            
              コーデの提供方法
            
          </Link>
          <Link
            href={{ hash: "coordinates" }}
            className="w-1/2 my-[4vw] sm:my-5 text-[3.5vw] sm:text-base">
            
              コーデ例
            
          </Link>
          <Link
            href={{ hash: "how-to-start" }}
            className="w-1/2 my-[4vw] sm:my-5 text-[3.5vw] sm:text-base">
            
              UWearのはじめ方
            
          </Link>
          <Link
            href={{ hash: "faq" }}
            className="w-1/2 my-[4vw] sm:my-5 text-[3.5vw] sm:text-base">
            
              よくあるご質問
            
          </Link>
          <Link
            href={{ hash: "news" }}
            className="w-1/2 my-[4vw] sm:my-5 text-[3.5vw] sm:text-base">
            
              お知らせ
            
          </Link>
        </div>
        <div className="flex flex-wrap text-xs pt-10">
          <Link
            href={{ pathname: "/company" }}
            className="w-1/2 my-[4vw] sm:my-5 text-[2.5vw] sm:text-sm">
            
              運営会社
            
          </Link>
          <Link
            href={{ pathname: "/laws" }}
            className="w-1/2 my-[4vw] sm:my-5 text-[2.5vw] sm:text-sm">
            
              特定商取引法に基づく表示
            
          </Link>
          <Link
            href={{ pathname: "/term" }}
            className="w-1/2 my-[4vw] sm:my-5 text-[2.5vw] sm:text-sm">
            
              利用規約
            
          </Link>
          <Link
            href={{ pathname: "/privacy" }}
            className="w-1/2 my-[4vw] sm:my-5 text-[2.5vw] sm:text-sm">
            
              プライバシーポリシー
            
          </Link>
          <a
            href={`${process.env.NEXT_PUBLIC_HOST_URL}/inquiry`}
            className="w-1/2 my-[4vw] sm:my-5 text-[2.5vw] sm:text-sm"
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
