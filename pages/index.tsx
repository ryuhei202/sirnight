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
    if (window.location.hash !== "") setIsOpeningVisible(false);
  }, []);

  // キャンペーンコードの有無を判定
  useEffect(() => {
    const campaignCodeString = Array.isArray(campaignCode)
      ? undefined
      : campaignCode;
    if (campaignCodeString) {
      localStorage.setItem("campaignCode", campaignCodeString);
    }
  }, [campaignCode]);

  useEffect(() => {
    forbidScroll();
    setTimeout(() => {
      allowScroll();
    }, 3000);
  }, []);

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
          leftImagePath="/images/conversions/1.png"
          rightImagePath="/images/conversions/2.png"
        />
        <Sympathy />
        <HowToUse />
        <SceneCoordinates />
        <HowToStart />
        <Conversion
          number={2}
          leftImagePath="/images/conversions/1.png"
          rightImagePath="/images/conversions/2.png"
        />
        <ServiceValue />
        <CustomerReviews />
        <Faq />
        <Conversion
          number={3}
          leftImagePath="/images/conversions/1.png"
          rightImagePath="/images/conversions/2.png"
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
