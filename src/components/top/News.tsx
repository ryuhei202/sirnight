import Link from "next/link";
import { handleData, TArticles } from "../../api/getArticles";
import { Typography } from "../baseParts/Typography";

type TProps = {
  data: TArticles;
};

export const News = ({ data }: TProps) => {
  return (
    <div className="bg-clay py-28 w-4/5 mx-auto" id="news">
      <p className="text-2xl text-center font-extrabold tracking-wider mb-14">
        お知らせ
      </p>
      <div>
        {data.contents.map((content, index) => (
          <Link href="#" key={index}>
            <div
              className={`py-10 tracking-wider cursor-pointer border-[#D8D8D2] border-t ${
                index === data.contents.length - 1
                  ? "border-b border-[#D8D8D2]"
                  : ""
              }`}
            >
              <Typography className="mb-3">{content.title}</Typography>
              <Typography className="font-lora" size="sm">
                {handleData({ date: content.publishedAt })}
              </Typography>
            </div>
          </Link>
        ))}
        <Link href="#">
          <div className="bg-clay text-themeGray text-right mt-10 tracking-wider font-semibold cursor-pointer">
            <a className="relative inline-block">
              <span className="text-xs mr-2 absolute top-[20%] -left-[20%]">
                &#9679;
              </span>
              もっと見る
            </a>
          </div>
        </Link>
      </div>
    </div>
  );
};
