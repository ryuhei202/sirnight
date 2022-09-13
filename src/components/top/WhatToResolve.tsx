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
          imageFileName="/images/resolves/3.webp"
          title={"LINEで服の相談ができます。"}
          description="着こなしに迷ったらLINEでスタイリストに相談ができます。どんな靴を買えばいいか？どんなアウターを買うかなど、服の悩みをご相談ください。"
        />
        <ItemCard
          className="my-10"
          imageFileName="/images/resolves/4.webp"
          title={"服はすべて購入できます。"}
          description="着てみてお気に入りのアイテムを購入できます。また毎月購入に使えるポイントも貯まります。"
        />
        <ItemCard
          className="my-10"
          imageFileName="/images/resolves/5.webp"
          title={"ライフスタイルにあわせて使えます。"}
          description="お気に入りのコーデは交換せずに次月も持ち続けられます。その場合、次月の料金が割引されます。また停止・再開もスムーズです。洋服が必要なタイミングでお使いください。"
        />
      </div>
    </div>
  );
};
