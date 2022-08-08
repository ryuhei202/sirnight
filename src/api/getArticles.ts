import { createClient } from "microcms-js-sdk";

export type TArticleContent = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type TArticles = {
  contents: TArticleContent[];
  totalCount: number;
  offset: number;
  limit: number;
};

export const client = createClient({
  serviceDomain: "uwear",
  apiKey: `${process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY}`,
});

type TProps = {
  date: string;
  type?: "dot" | "kanji";
};

export const handleData = ({ date, type = "dot" }: TProps) => {
  const regex = new RegExp("T.+Z", "g");
  const dateTimeRemoved = date.replace(regex, "");

  const formattedDate =
    type === "dot"
      ? dateTimeRemoved.replaceAll("-", ".")
      : dateTimeRemoved.replaceAll(/(\d+)-(\d+)-(\d+)/g, "$1年$2月$3日");

  return formattedDate;
};
