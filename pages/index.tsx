import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { CatchCopy } from "../src/components/top/CatchCopy";
import { Conversion } from "../src/components/top/Conversion";
import { ItemList } from "../src/components/top/ItemList";
import { KeyVisual } from "../src/components/top/KeyVisual";
import { OpeningPage } from "../src/components/top/OpeningPage";
import { PointDescription } from "../src/components/top/PointDescription";
import { ServiceDescription } from "../src/components/top/ServiceDescription";
import { WhatToResolve } from "../src/components/top/WhatToResolve";

const Home: NextPage = () => {
  useEffect(() => {
    setTimeout(() => {
      const container = document.getElementById("container") as HTMLElement;
      container.classList.remove("fixed", "inset-0");
    }, 3000);
  }, []);

  return (
    <div className="h-full bg-clay sm:w-[500px]">
      <Head>
        <title>UWear公式サイト</title>
        <meta
          name="description"
          content="メンズファッションレンタルサービスUWear"
        />
        <link rel="icon" href="/favicon/favicon_head.png" />
      </Head>
      <div id="container" className="fixed inset-0">
        <OpeningPage className="z-30" />
        <div className="w-full h-full">
          <KeyVisual />
          <CatchCopy />
        </div>
        <ServiceDescription />
        <div className="overflow-hidden">
          <ItemList type="tops" />
          <ItemList type="bottoms" />
        </div>
        <PointDescription />
        <WhatToResolve />
        <Conversion />
      </div>
    </div>
  );
};

export default Home;
