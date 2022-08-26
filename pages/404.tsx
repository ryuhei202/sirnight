import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { FooterMenu } from "../src/components/top/FooterMenu";

const Custom404: NextPage = () => {
  return (
    <div>
      <NextSeo title="ページが見つかりません" />
      <div className="h-full min-h-screen inset-0 text-themeGray">
        <div className="h-[calc(100vh_-_70px)] text-center flex flex-wrap content-center items-center justify-center space-y-8">
          <div className="flex items-center justify-centerx">
            <h1 className="inline-block m-0 mr-4 py-3 pr-5 text-[6vw] sm:text-2xl font-semibold border-r border-themeGray/50">
              404
            </h1>
            <p className="text-lg font-semibold">ページが見つかりません</p>
          </div>
          <p className="w-full text-xs">You Where?</p>
        </div>
        <FooterMenu />
      </div>
    </div>
  );
};

export default Custom404;
