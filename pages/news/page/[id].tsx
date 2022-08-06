import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { client, TArticles } from "../../../src/api/getArticles";
import { NewsLinkList } from "../../../src/components/news/NewsLinkList";
import { Pagination } from "../../../src/components/news/Pagination";
import { Header } from "../../../src/components/plan/Header";

export const PER_PAGE = 3;

type TProps = {
  articlesData: TArticles;
  pageId: number;
};

const NewsPageId: NextPage<TProps> = ({ articlesData, pageId }: TProps) => {
  return (
    <div>
      <Head>
        <title>お知らせ | UWear公式サイト</title>
      </Head>
      <div className="h-full min-h-screen bg-clay sm:w-[500px] text-themeGray">
        <Header lists={[{ name: "お知らせ" }]} />
        <div className="w-4/5 pt-14 mx-auto">
          <p className="text-3xl text-center font-extrabold tracking-wider mb-14">
            お知らせ
          </p>
          <NewsLinkList data={articlesData} />
          <Pagination
            totalCount={articlesData.totalCount}
            currentPageId={pageId}
          />
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "news" });

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(data.totalCount / PER_PAGE)).map(
    (page) => `/news/page/${page}`
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const pageId = Number(context.params?.id);

  const data = await client.get({
    endpoint: "news",
    queries: { offset: (Number(pageId) - 1) * PER_PAGE, limit: PER_PAGE },
  });

  return {
    props: {
      articlesData: data,
      pageId,
    },
    revalidate: 60,
  };
};

export default NewsPageId;
