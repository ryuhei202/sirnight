import { ReviewCard } from "./ReviewCard";

export const CustomerReviews = () => {
  return (
    <div className="bg-[#F4F3EF] py-28 px-[6%]">
      <p className="text-[6vw] sm:text-2xl text-center font-extrabold mb-14">
        ご利用者の声
      </p>
      <ReviewCard
        customer={{
          imagePath: "/images/customerReviews/3.webp",
          initial: "M",
          age: 35,
          address: "東京",
        }}
        content={
          <>
            アパレルショップで試着せずに買っちゃうことがあって、家に帰って着てみたら「あんまり似合わなかった！」とか「結局あんまり使わなかった！」というのがなくなりました。
          </>
        }
        type="right"
      />
      <ReviewCard
        customer={{
          imagePath: "/images/customerReviews/1.webp",
          initial: "S",
          age: 39,
          address: "神奈川",
        }}
        content={
          <>
            毎月違うバリエーションの洋服が届くので、マンネリ感もないし、「これとあれを着ようかな」と洋服を選ぶのが楽になりましたね。
          </>
        }
        type="left"
      />
      <ReviewCard
        customer={{
          imagePath: "/images/customerReviews/2.webp",
          initial: "K",
          age: 41,
          address: "千葉",
        }}
        content={
          <>
            スタイリストが選んだコーデが毎月届くので、洋服を買いに行く手間がなくなりました。
          </>
        }
        type="right"
      />
    </div>
  );
};
