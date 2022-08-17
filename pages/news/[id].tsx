import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Link from "next/link";
import {
  client,
  handleData,
  TArticleContent,
  TArticles,
} from "../../src/api/getArticles";
import { LinkButton } from "../../src/components/baseParts/LinkButton";
import { NewsContent } from "../../src/components/news/NewsContent";
import { Header } from "../../src/components/plan/Header";
import { FooterMenu } from "../../src/components/top/FooterMenu";

export const getStaticPaths = async () => {
  const articlesData = await client.get<TArticles>({ endpoint: "news" });
  const paths = articlesData.contents.map(
    (data: TArticleContent) => `/news/${data.id}`
  );
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const articleId = context.params?.id;
  const article = await client.get<TArticleContent>({
    endpoint: `news/${articleId}`,
  });
  return { props: article };
};

const NewsDetail: NextPage<TArticleContent> = (article: TArticleContent) => {
  return (
    <div className="h-full bg-clay sm:w-[500px]">
      <NextSeo title={`${article.title}`} />
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Lora"
        />
      </Head>
      <div
        id="container"
        className="h-full min-h-screen bg-clay sm:w-[500px] inset-0 text-themeGray"
      >
        <Header
          lists={[
            { name: "お知らせ", path: `/news/page/${1}` },
            { name: `${article.title}` },
          ]}
        />
        <div className="px-12">
          <div className="py-12 border-b-[1px] border-[#D8D8D2]">
            <p className="text-xs">
              {handleData({ date: article.publishedAt })}
            </p>
            <h2 className="pt-2 text-xl font-bold">{`${article.title}`}</h2>
          </div>
          <div className="pt-12 text-sm">
            <div className="text-right pb-12">
              <p>{handleData({ date: article.publishedAt, type: "kanji" })}</p>
              <p>株式会社kizankiizan</p>
            </div>
            <NewsContent content={article?.body} />
            <LinkButton
              href={`/news/page/${1}`}
              variant="text"
              className="w-full font-bold text-base mt-12 mb-48 rounded-full border"
            >
              お知らせ一覧に戻る
            </LinkButton>
          </div>
        </div>
        <FooterMenu />
      </div>
    </div>
  );
};
export default NewsDetail;
