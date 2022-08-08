import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { CatchCopy } from "../src/components/top/CatchCopy";
import { Conversion } from "../src/components/top/Conversion";
import { ServiceValue } from "../src/components/top/ServiceValue";
import { HowToStart } from "../src/components/top/HowToStart";
import { HowToUse } from "../src/components/top/HowToUse";
import { ItemList } from "../src/components/top/ItemList";
import { KeyVisual } from "../src/components/top/KeyVisual";
import { OpeningPage } from "../src/components/top/OpeningPage";
import { PointDescription } from "../src/components/top/PointDescription";
import { SceneCoordinates } from "../src/components/top/SceneCoordinates";
import { ServiceDescription } from "../src/components/top/ServiceDescription";
import { Sympathy } from "../src/components/top/Sympathy";
import { WhatToResolve } from "../src/components/top/WhatToResolve";
import { CustomerReviews } from "../src/components/top/CustomerReviews";
import { Faq } from "../src/components/top/Faq";
import { Footer } from "../src/components/top/Footer";
import { News } from "../src/components/top/News";
import { FooterMenu } from "../src/components/top/FooterMenu";

const Home: NextPage = () => {
  useEffect(() => {
    setTimeout(() => {
      const container = document.getElementById("container") as HTMLElement;
      container.classList.remove("fixed", "inset-0");
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>UWear公式サイト</title>
        <meta
          name="description"
          content="メンズファッションレンタルサービスUWear"
        />
        <link rel="icon" href="/favicon/favicon_head.png" />
      </Head>
      <OpeningPage className="z-50" />
      <div
        id="container"
        className="relative sm:w-[500px] bg-clay text-themeGray z-40"
      >
        <div className="w-full h-full">
          <KeyVisual />
          <CatchCopy />
        </div>
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
        <News />
        <Footer />
        <FooterMenu />
      </div>
    </>
  );
};

export default Home;
