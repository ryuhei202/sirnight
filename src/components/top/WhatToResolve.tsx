import { ItemCard } from "../baseParts/ItemCard";

export const WhatToResolve = () => {
  return (
    <div className={`relative w-[100%]`}>
      <img src="/images/resolves/resolve-1.png" alt="resolve-1" />
      <div className="absolute top-0 left-1/2 translate-x-[-50%] text-slate-50 text-center w-[70%] mt-[340px]">
        <p className="text-2xl">UWearでできること</p>
        <p>Service Value</p>
      </div>
      <div>
        <ItemCard
          className="m-10"
          imageFileName="/images/resolves/resolve-2.png"
          title={"イベントやシーンに<br />自信をもってお出かけできます"}
          description="スタイリストがあなたが使うシーン、作りたい印象にあわせたコーデをお作りし、着こなし方のアドバイスをお送りします。毎日のコーデを自信をもって着ることができます。"
        />
        <ItemCard
          className="m-10"
          imageFileName="/images/resolves/resolve-3.png"
          title={"洋服を着たときの悩みから<br />解放されます"}
          description="毎日の着るにおける悩みをLINEでスタイリストに相談できます。「サイズがあっているか不安」「イケているか不安」すべてスタイリストが回答させていただきます。"
        />
        <ItemCard
          className="m-10"
          imageFileName="/images/resolves/resolve-4.png"
          title={"毎日の着るが良くなります"}
          description="あなたの使いたいシーン、作りたい印象をもとにスタイリストがコーデを考えます。シーンに合った洋服、洋服の合わせ方、サイズを考える面倒がなくなります。"
        />
        <ItemCard
          className="m-10"
          imageFileName="/images/resolves/resolve-5.png"
          title={"お出かけするイベントが<br />もっと楽しみになります"}
          description="スタイリストがあなたが使うシーン、作りたい印象にあわせたコーデをお作りし、着こなし方のアドバイスをお送りします。毎日のコーデを自信をもって着ることができます。"
        />
      </div>
    </div>
  );
};
