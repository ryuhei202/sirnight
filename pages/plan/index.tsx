import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Plan: NextPage = () => {
  return (
    <div className="h-full bg-clay sm:w-[500px]">
      <Head>
        <title>プラン | UWear公式サイト</title>
        <meta
          name="description"
          content="メンズファッションレンタルサービスUWear"
        />
        <link rel="icon" href="/favicon/favicon_head.png" />
      </Head>
      <div id="container" className="h-full bg-clay sm:w-[500px] inset-0 text-themeGray">
        <div className="relative w-full p-2 text-[#979B9A]">
          <Link href="/">トップ</Link><span> > 料金プラン</span>
        </div>
        <h2 className="text-3xl my-10 text-center font-bold">料金プラン</h2>
        <div>
          <div className="flex flex-row justify-between px-4">
            <span className="w-1/3 text-center py-4 mx-2 border-b-2 border-themeGray">ライト</span>
            <span className="w-1/3 text-center py-4 mx-2 border-b-2 border-themeGray">スタンダード</span>
            <span className="w-1/3 text-center py-4 mx-2 border-b-2 border-themeGray">プレミアム</span>
          </div>
          <div>
            <div className="">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Plan;
