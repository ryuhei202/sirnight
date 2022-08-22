import Link from "next/link";
import { handleData, TArticles } from "../../lib/getArticles";
import { Typography } from "../baseParts/Typography";

type TProps = {
  data: TArticles;
};

export const NewsLinkList = ({ data }: TProps) => {
  return (
    <>
      {data.contents.map((content, index) => (
        <Link href={`/news/${content.id}`} key={index}>
          <a
            className={`block py-10 border-[#D8D8D2] border-t ${
              index === data.contents.length - 1
                ? "border-b border-[#D8D8D2]"
                : ""
            }`}
          >
            <Typography size="sm" className="mb-3 block" component="span">
              {content.title}
            </Typography>
            <Typography className="font-lora block" size="sm" component="span">
              {handleData({ date: content.publishedAt })}
            </Typography>
          </a>
        </Link>
      ))}
    </>
  );
};
