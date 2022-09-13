import { Worry } from "./Worry";

type TProps = {
  readonly className?: string;
};
export const Sympathy = ({ className }: TProps) => {
  return (
    <div className={`${className}`}>
      <p className="text-[6vw] sm:text-2xl text-center mx-auto font-medium leading-10">
        こんな洋服の
        <span className="border-b-2 border-dashed border-bottom border-themeGray pb-0.5">
          選ぶ面倒
        </span>
        はありませんか？
      </p>
      <div className="flex flex-col mt-12 font-medium px-[30px]">
        <Worry
          type="right"
          content={
            <>
              イタリアンデートで、 どんなアイテムを
              <br />
              組み合わせれば良いのか分からない。
            </>
          }
        />
        <Worry
          type="left"
          content={
            <>
              スタイリストがTPOにあわせて、
              <br />
              あなたが魅力的に見えるコーデをお届けします。
            </>
          }
        />
        <Worry
          type="right"
          content={
            <>
              店員さんに勧められて買ったシャツが、
              <br />
              自分のイメージと合ってない気がする。
            </>
          }
        />
        <Worry
          type="left"
          content={
            <>
              届いたコーデのレビューをすることで、
              <br />
              あなたのイメージのコーデに近づきます。
            </>
          }
        />
        <Worry
          type="right"
          content={
            <>
              同じようなアイテムを着てしまい、
              <br />
              いつも同じ感じの組み合わせになる。
            </>
          }
        />
        <Worry
          type="left"
          content={
            <>
              自分の洋服との着こなし方をスタイリストに相談でき、
              <br />
              組み合わせの幅が広がります。
            </>
          }
        />
      </div>
    </div>
  );
};
