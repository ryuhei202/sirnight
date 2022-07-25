import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { CatchCopy } from "../src/components/top/CatchCopy";
import { KeyVisual } from "../src/components/top/KeyVisual";
import { OpeningPage } from "../src/components/top/OpeningPage";
import { PointDescription } from "../src/components/top/PointDescription";
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
        <div className="relative p-10 text-center bg-clay">
          <h3 className="text-xl text-themeGray tracking-wider leading-9">
            UWearは、あなたと一緒に
            <br />
            最適なコーデを考えます。
          </h3>
          <p className="text-sm mt-8 text-themeGray leading-6">
            UWear(ユーウェア)は、
            <br />
            洋服の悩みをスタイリストが解決し、
            <br />
            あなたのためのコーデが届く
            <br />
            月額制のファッションレンタルサービスです。
          </p>
        </div>
        <div className="h-[50vh]">アイテムがぐるぐる</div>
        <PointDescription />
        <WhatToResolve />
      </div>
    </div>
  );
};

export default Home;
