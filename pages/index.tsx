import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CatchCopy } from "../src/components/top/CatchCopy";
import { Conversion } from "../src/components/top/Conversion";
import { CustomerReviews } from "../src/components/top/CustomerReviews";
import { Faq } from "../src/components/top/Faq";
import { Footer } from "../src/components/top/Footer";
import { FooterMenu } from "../src/components/top/FooterMenu";
import { HowToStart } from "../src/components/top/HowToStart";
import { HowToUse } from "../src/components/top/HowToUse";
import { ItemList } from "../src/components/top/ItemList";
import { KeyVisual } from "../src/components/top/KeyVisual";
import { News } from "../src/components/top/News";
import { OpeningPage } from "../src/components/top/OpeningPage";
import { PointDescription } from "../src/components/top/PointDescription";
import { SceneCoordinates } from "../src/components/top/SceneCoordinates";
import { ServiceDescription } from "../src/components/top/ServiceDescription";
import { ServiceValue } from "../src/components/top/ServiceValue";
import { Sympathy } from "../src/components/top/Sympathy";
import { WhatToResolve } from "../src/components/top/WhatToResolve";
import { client, TArticles } from "../src/lib/getArticles";

type TProps = {
  articlesData: TArticles;
};

const forbidScroll = () => {
  document.addEventListener("mousewheel", preventScroll, { passive: false });
  document.addEventListener("touchmove", preventScroll, { passive: false });
};

const allowScroll = () => {
  document.removeEventListener("mousewheel", preventScroll);
  document.removeEventListener("touchmove", preventScroll);
};

const preventScroll = (e: Event) => {
  e.preventDefault();
};

const Home: NextPage<TProps> = ({ articlesData }) => {
  const [isOpeningVisible, setIsOpeningVisible] = useState(true);
  const campaignCode = useRouter().query.campaignCode;

  // オープニング画面を表示判定
  useEffect(() => {
    if (window.location.hash !== "") {
      setIsOpeningVisible(false);
      return;
    }
    forbidScroll();
    setTimeout(() => {
      allowScroll();
    }, 3000);
  }, []);

  // キャンペーンコードの有無を判定
  useEffect(() => {
    const campaignCodeString = Array.isArray(campaignCode)
      ? undefined
      : campaignCode;
    if (campaignCodeString) {
      localStorage.setItem("campaignCode", campaignCodeString);
      // TODO: 10月31日で削除もしくはより汎用的な実装にして以下を削除
      if (campaignCode == "GP29736")
        window.alert(
          "【コンパde恋ぷらん会員様限定クーポンが適用されました】\nUWear（旧leeap）にようこそ！！\nコンパde恋プラン会員様専用のページから起こし頂いたので\nライトプラン：6,800円(税抜)→3,400円(税抜)\nスタンダードプラン：9,800円(税抜)→6,400円(税抜)\nになるクーポンが自動的に適用完了しています。\n割引後の金額は最終確認画面でご確認いただくことができます。\n\n※2022年9月1日よりleeapはUWearとしてリニューアルしました。"
        );
    }
  }, [campaignCode]);

  return (
    <>
      {isOpeningVisible && <OpeningPage className="z-50" />}
      <div id="container" className="relative text-themeGray z-40">
        <KeyVisual />
        <CatchCopy />
        <ServiceDescription />
        <div className="overflow-hidden z-10">
          <ItemList type="tops" />
          <ItemList type="bottoms" />
        </div>
        <PointDescription />
        <WhatToResolve />
        <Conversion
          number={1}
          leftImagePath="/images/conversions/1/1.webp"
          rightImagePath="/images/conversions/1/2.webp"
        />
        <Sympathy />
        <HowToUse />
        <SceneCoordinates />
        <HowToStart />
        <Conversion
          number={2}
          leftImagePath="/images/conversions/2/1.webp"
          rightImagePath="/images/conversions/2/2.webp"
        />
        <ServiceValue />
        <CustomerReviews />
        <Faq />
        <Conversion
          number={3}
          leftImagePath="/images/conversions/3/1.webp"
          rightImagePath="/images/conversions/3/2.webp"
        />
        <News data={articlesData} />
        <Footer />
        <FooterMenu />
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const articlesData = await client.get<TArticles>({
    endpoint: "news",
    queries: {
      limit: 6,
    },
  });
  return {
    props: {
      articlesData,
    },
    revalidate: 60,
  };
};

export default Home;
