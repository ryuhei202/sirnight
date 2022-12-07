import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { LinkButton } from "../../src/components/baseParts/LinkButton";
import { NewsContent } from "../../src/components/news/NewsContent";
import { Header } from "../../src/components/plan/Header";
import { FooterMenu } from "../../src/components/top/FooterMenu";
import { handleDate } from "../../src/lib/microCMS/handleDate";
import {
  TNews,
  TNewsContent,
  uwearClient,
} from "../../src/lib/microCMS/uwearClient";

export const getStaticPaths = async () => {
  const articlesData = await uwearClient.get<TNews>({ endpoint: "news" });
  const paths = articlesData.contents.map(
    (data: TNewsContent) => `/news/${data.id}`
  );
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const articleId = context.params?.id;
  const article = await uwearClient.get<TNewsContent>({
    endpoint: `news/${articleId}`,
  });
  return { props: article, revalidate: 60 };
};

const NewsDetail: NextPage<TNewsContent> = (article: TNewsContent) => {
  return (
    <div className="h-full">
      <NextSeo
        title={`${article.title}`}
        openGraph={{
          images: [
            {
              url: article.image
                ? `${article.image.url}?txt=${article.title}&txt-pad=90&txt-color=475156&txt-size=48&txt-align=middle,center&txtfont=Hiragino%20Sans%20W6&txt-track=2&txt-fit=max`
                : `https://uwear.jp/images/meta/ogp.jpg`,
              width: 1200,
              height: 630,
              alt: article.title,
            },
          ],
        }}
      />
      <div
        id="container"
        className="h-full min-h-screen inset-0 text-themeGray"
      >
        <Header
          lists={[
            { name: "お知らせ", path: `/news/page/${1}` },
            { name: `${article.title}` },
          ]}
        />
        <div className="px-8">
          <div className="py-12 border-b-[1px] border-[#D8D8D2]">
            <p className="text-xs">
              {handleDate({ date: article.publishedAt })}
            </p>
            <h2 className="pt-2 text-xl font-bold">{`${article.title}`}</h2>
          </div>
          <div className="pt-12 text-sm">
            <div className="text-right pb-12">
              <p>{handleDate({ date: article.publishedAt, type: "kanji" })}</p>
              <p>株式会社kiizankiizan</p>
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
