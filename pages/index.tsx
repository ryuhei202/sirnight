import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { KeyVisual } from "../src/components/top/KeyVisual";
import { OpeningPage } from "../src/components/top/OpeningPage";
import { PointDescription } from "../src/components/top/PointDescription";
import { WhatToResolve } from "../src/components/top/WhatToResolve";

const Home: NextPage = () => {
  useEffect(() => {
    setTimeout(() => {
      const body = document.getElementById("body") as HTMLElement;
      setTimeout(() => {
        body.classList.remove("fixed", "inset-0");
      }, 3000);
    });
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
      <div id="body" className="fixed inset-0">
        <OpeningPage className="z-30" />
        <div className="w-full h-full">
          <KeyVisual />
          <div className="relative w-screen h-[820px]">
            <div className="absolute z-10 bg-clay h-[400px] w-screen"></div>
            <h2 className="absolute z-20 h-screen text-themeGray text-3xl tracking-[0.3em] leading-10 mx-auto top-[100px] left-1/2 translate-x-[-50%] [writing-mode:vertical-rl]">
              洋服を選ぶのが
              <br />
              苦手なあなたに。
            </h2>
            <img
              src="/images/keyVisuals/sub/4-1.svg"
              alt="keyvisuals-4-1"
              className="absolute z-25 top-[320px]"
            />
          </div>
        </div>
        <div className="relative p-10 text-center">
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
