import { ItemCard } from "../baseParts/ItemCard";

export const WhatToResolve = () => {
  return (
    <div className="relative w-full mb-32">
      <div className="relative">
        <img src="/images/resolves/resolve-1.png" alt="resolve" />
        <div className="absolute h-[250px] bottom-0 left-1/2 pt-14 translate-x-[-50%] text-slate-50 text-center w-full bg-gradient-to-b from-transparent to-black">
          <p className="text-3xl font-semibold">UWearでできること</p>
          <p className="font-semibold mt-3 font-lora border-b border-white border-dashed w-fit mx-auto">
            Service Value
          </p>
        </div>
      </div>
      <div className="w-[75%] mx-auto">
        <ItemCard
          className="-mt-16 mb-10 absolute "
          imageFileName="/images/resolves/resolve-2.png"
          title={"イベントやシーンに<br />自信をもってお出かけできます"}
          description="スタイリストがあなたが使うシーン、作りたい印象にあわせたコーデをお作りし、着こなし方のアドバイスをお送りします。毎日のコーデを自信をもって着ることができます。"
        />
        <ItemCard
          className="my-10"
          imageFileName="/images/resolves/resolve-3.png"
          title={"洋服を着たときの悩みから<br />解放されます"}
          description="毎日の着るにおける悩みをLINEでスタイリストに相談できます。「サイズがあっているか不安」「イケているか不安」すべてスタイリストが回答させていただきます。"
        />
        <ItemCard
          className="my-10"
          imageFileName="/images/resolves/resolve-4.png"
          title={"毎日の着るが良くなります"}
          description="あなたの使いたいシーン、作りたい印象をもとにスタイリストがコーデを考えます。シーンに合った洋服、洋服の合わせ方、サイズを考える面倒がなくなります。"
        />
        <ItemCard
          className="my-10"
          imageFileName="/images/resolves/resolve-5.png"
          title={"お出かけするイベントが<br />もっと楽しみになります"}
          description="スタイリストがあなたが使うシーン、作りたい印象にあわせたコーデをお作りし、着こなし方のアドバイスをお送りします。毎日のコーデを自信をもって着ることができます。"
        />
      </div>
    </div>
  );
};
