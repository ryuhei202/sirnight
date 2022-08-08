import Link from "next/link";
import { handleData, TArticles } from "../../api/getArticles";
import { Typography } from "../baseParts/Typography";

type TProps = {
  data: TArticles;
};

export const NewsLinkList = ({ data }: TProps) => {
  return (
    <>
      {data.contents.map((content, index) => (
        <Link href={`/news/${content.id}`} key={index}>
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
    </>
  );
};
