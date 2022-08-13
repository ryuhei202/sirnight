import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { client, TArticles } from "../src/lib/getArticles";
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

type TProps = {
  articlesData: TArticles;
};

const forbitScroll = () => {
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
  useEffect(() => {
    forbitScroll();
    setTimeout(() => {
      allowScroll();
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>UWear公式サイト</title>
      </Head>
      <OpeningPage className="z-50" />
      <div
        id="container"
        className="relative sm:w-[500px] bg-clay text-themeGray z-40"
      >
        <KeyVisual />
        <CatchCopy />
        <ServiceDescription />
        <div className="overflow-hidden z-10">
          <ItemList type="tops" />
          <ItemList type="bottoms" />
        </div>
        <PointDescription />
        <WhatToResolve />
        <Conversion />
        <Sympathy />
        <HowToUse />
        <SceneCoordinates />
        <HowToStart />
        <Conversion />
        <ServiceValue />
        <CustomerReviews />
        <Faq />
        <Conversion />
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
