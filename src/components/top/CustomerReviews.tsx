import { ReviewCard } from "./ReviewCard";

export const CustomerReviews = () => {
  return (
    <div className="bg-[#F4F3EF] py-28 px-[6%]">
      <p className="text-2xl text-center font-extrabold tracking-wider mb-14">
        ご利用者の声
      </p>
      <ReviewCard
        customer={{
          imagePath: "/images/customerReviews/1.png",
          age: 40,
          work: "自営業",
        }}
        content={
          <>
            仮）本当に自分に似合う服が見つかる、次のイベントのコーデを考える、違う人から「
            <span className="font-semibold">雰囲気がよくなった</span>
            」と言われる。日々のいろんな変化を通じて、毎日の着るが楽しくなります。
          </>
        }
        type="left"
      />
      <ReviewCard
        customer={{
          imagePath: "/images/customerReviews/2.png",
          age: 40,
          work: "自営業",
        }}
        content={
          <>
            仮）本当に自分に似合う服が見つかる、次のイベントのコーデを考える、違う人から「
            <span className="font-semibold">雰囲気がよくなった</span>
            」と言われる。日々のいろんな変化を通じて、毎日の着るが楽しくなります。
          </>
        }
        type="right"
      />
      <ReviewCard
        customer={{
          imagePath: "/images/customerReviews/3.png",
          age: 40,
          work: "自営業",
        }}
        content={
          <>
            仮）本当に自分に似合う服が見つかる、次のイベントのコーデを考える、違う人から「
            <span className="font-semibold">雰囲気がよくなった</span>
            」と言われる。日々のいろんな変化を通じて、毎日の着るが楽しくなります。
          </>
        }
        type="left"
      />
    </div>
  );
};
