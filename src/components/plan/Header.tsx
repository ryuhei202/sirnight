import Link from "next/link";

export const Header = () => {
  return (
    <div className="w-full p-3 h-10 text-[#979B9A] text-xs flex border-b-2 border-[#D8D8D2]">
      <div className="flex w-14">
        <img src="/images/icons/home.svg" alt="icon-home" className="w-1/3" />
        <Link href="/">
          <a>トップ</a>
        </Link>
      </div>
      <div className="mx-3">＞</div>
      <div className="flex">
        <p>料金プラン</p>
      </div>
    </div>
  );
};
