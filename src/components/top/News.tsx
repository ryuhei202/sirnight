import Link from "next/link";
import { TArticles } from "../../lib/getArticles";
import { NewsLinkList } from "../news/NewsLinkList";

type TProps = {
  data: TArticles;
};

export const News = ({ data }: TProps) => {
  return (
    <div className="bg-clay py-28 w-4/5 mx-auto" id="news">
      <p className="text-2xl text-center font-extrabold mb-14">お知らせ</p>
      <div>
        <NewsLinkList data={data} />
        <div className="bg-clay text-themeGray text-right mt-10 font-semibold">
          <Link href={{ pathname: "/news/page/1" }}>
            <a className="relative inline-block">
              <span className="text-xs mr-2 absolute top-[20%] -left-[20%]">
                &#9679;
              </span>
              もっと見る
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
