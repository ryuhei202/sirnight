import { Worry } from "./Worry";

export const Sympathy = () => {
  return (
    <div className="py-[100px] px-[30px]">
      <p className="text-[6vw] sm:text-2xl text-center mx-auto font-semibold leading-10">
        こんなシーンで
        <br />
        <span className="border-b-2 border-dashed border-bottom border-themeGray pb-0.5">
          コーデの悩み
        </span>
        ありませんか？
      </p>
      <div className="flex flex-col mt-12 font-semibold">
        <Worry
          type="right"
          status="30代前半 会社員"
          content={
            <>
              奥さんの仲良しのファミリーと
              <br />
              家での食事会に参加、 <br />
              着ていく服がわからない...
            </>
          }
        />
        <Worry
          type="left"
          status="40代前半 自営業"
          content={
            <>
              プライベートで会社の同僚と旅行。
              <br />
              普段の洋服で行って良いものか...
            </>
          }
        />
        <Worry
          type="right"
          status="20代前半 会社員"
          content={
            <>
              同僚で意識している
              <br />
              女性と週末にデート。
              <br />
              私服を見られて
              <br />
              がっかりされたくない...
            </>
          }
        />
        <Worry
          type="left"
          status="30代前半 会社員"
          content={
            <>
              奥さんの仲良しのファミリーと
              <br />
              家での食事会に参加、
              <br />
              着ていく服がわからない...
            </>
          }
        />
      </div>
    </div>
  );
};
