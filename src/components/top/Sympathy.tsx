import { Worry } from "./Worry";

type TProps = {
  readonly className?: string;
};
export const Sympathy = ({ className }: TProps) => {
  return (
    <div className={`${className}`}>
      <p className="text-[6vw] sm:text-3xl text-center mx-auto font-bold leading-10">
        ３つの安心ポイント
      </p>
      <div className="flex flex-col font-medium px-[30px]">
        <div className="mt-12">
          <Worry
            type="right"
            content={
              <>
                イタリアンデートで、 どんなアイテムを
                組み合わせれば良いのか分からない。
              </>
            }
          />
          <Worry
            type="left"
            content={
              <>
                スタイリストがイタリアンデートにあわせて、
                あなたが魅力的に見えるコーデをお届けします。
              </>
            }
          />
        </div>
        <div className="mt-12">
          <Worry
            type="right"
            content={
              <>
                店員さんに勧められて買ったシャツが、
                自分のイメージと合ってない気がする。
              </>
            }
          />
          <Worry
            type="left"
            content={
              <>
                届いたコーデのレビューをすることで、
                あなたがイメージするコーデに近づきます。
              </>
            }
          />
        </div>
        <div className="mt-12">
          <Worry
            type="right"
            content={
              <>
                同じようなアイテムを着てしまい、
                いつも同じ感じの組み合わせになる。
              </>
            }
          />
          <Worry
            type="left"
            content={
              <>
                自分の服との着こなし方をスタイリストに相談でき、
                組み合わせの幅が広がります。
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};
