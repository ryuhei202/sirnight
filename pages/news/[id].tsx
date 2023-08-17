import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { NewsContentWrapper } from "../../src/components/about/NewsContentWrapper";
import {
  TNews,
  TNewsContent,
  uwearClient,
} from "../../src/lib/microCMS/uwearClient";

export const getStaticPaths = async () => {
  const LIMIT = 1000;
  const articlesData = await uwearClient.get<TNews>({
    endpoint: "news",
    queries: { limit: LIMIT },
  });
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
      <NewsContentWrapper article={article} />
    </div>
  );
};
export default NewsDetail;
