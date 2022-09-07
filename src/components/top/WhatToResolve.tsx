import { ItemCard } from "../baseParts/ItemCard";

export const WhatToResolve = () => {
  return (
    <div className="relative w-full mb-32" id="service-value">
      <div className="relative">
        <img src="/images/resolves/1.webp" alt="resolve" />
        <div className="absolute h-[250px] bottom-0 left-1/2 pt-14 translate-x-[-50%] text-slate-50 text-center w-full bg-gradient-to-b from-transparent to-black">
          <p className="text-3xl font-medium tracking-wider">
            UWearで出来ること
          </p>
          <p className="font-medium mt-3 font-lora border-b border-white border-dashed w-fit mx-auto">
            Service Value
          </p>
        </div>
      </div>
      <div className="w-[75%] mx-auto">
        <ItemCard
          className="-mt-16 mb-10 absolute "
          imageFileName="/images/resolves/2.webp"
          title={"イベントやシーンに<br />自信をもってお出かけできます"}
          description="スタイリストがあなたの利用シーンと見せたい印象にあったコーデをお作りします。イベントに自信をもってお出かけできます。"
        />
        <ItemCard
          className="my-10"
          imageFileName="/images/resolves/3.webp"
          title={"洋服を着たときの悩みから<br />解放されます"}
          description="毎日の洋服の悩みをスタイリストに相談できます。「サイズの不安」「着こなしの不安」すべてスタイリストが回答します。"
        />
        <ItemCard
          className="my-10"
          imageFileName="/images/resolves/4.webp"
          title={"毎日の着るが良くなります"}
          description="洋服の合わせ方、相手から見られたい印象のコーデのつくり方、サイズを考える面倒から解放されます。毎日の着るがどんどん良くなります。"
        />
        <ItemCard
          className="my-10"
          imageFileName="/images/resolves/5.webp"
          title={"お出かけするイベントが<br />もっと楽しみになります"}
          description="次のイベントに合う洋服をスタイリストに相談する。次のイベントで見せたい印象にあった洋服をスタイリストと一緒に考える。それだけで次のイベントがもっと楽しみになります！"
        />
      </div>
    </div>
  );
};
