import Link from "next/link";

export const Footer = () => {
  return (
    <div className="py-28 bg-themeGray">
      <div className="mx-[13%] text-beige">
        <img src="/images/logos/beige.svg" />
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
            <img src="/images/icons/instagram/primary.svg" className="h-[30px]" />
          </a>
          <a
            href="https://twitter.com/leeapjp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/icons/twitter/primary.svg" className="h-[30px]" />
          </a>
          <a
            href="https://www.facebook.com/leeapjp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/icons/facebook/primary.svg" className="h-[30px]" />
          </a>
        </div>
        <div className="flex flex-wrap font-semibold py-10 border-b-2 border-[#676F72]">
          <Link href="#service-description">
            <a className="w-[50%] my-5">UWearとは</a>
          </Link>
          <Link href="#">
            <a className="w-[50%] my-5">スタイリスト紹介</a>
          </Link>
          <Link href="#coordinates">
            <a className="w-[50%] my-5">コーデ例</a>
          </Link>
          <Link href="#how-to-use">
            <a className="w-[50%] my-5">ご利用の流れ</a>
          </Link>
          <Link href="faq">
            <a className="w-[50%] my-5">よくあるご質問</a>
          </Link>
          <Link href="news">
            <a className="w-[50%] my-5">お知らせ</a>
          </Link>
        </div>
        <div className="flex flex-wrap text-xs pt-10">
          <a className="w-[50%] my-5">運営会社</a>
          <a className="w-[50%] my-5">特定商取引法に基づく表示</a>
          <a className="w-[50%] my-5">利用規約</a>
          <a className="w-[50%] my-5">プライバシーポリシー</a>
        </div>
      </div>
    </div>
  );
};