import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { AboutContentWrapper } from "../../src/components/about/AboutContentWrapper";
import {
  TAbout,
  TAboutContent,
  uwearAboutClient,
} from "../../src/lib/microCMS/uwearAboutClient";

export const getStaticPaths = async () => {
  const LIMIT = 1000;
  const articlesData = await uwearAboutClient.get<TAbout>({
    endpoint: "about",
    queries: { limit: LIMIT },
  });
  const paths = articlesData.contents.map(
    (data: TAboutContent) => `/about/${data.id}`
  );
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const articleId = context.params?.id;
  const article = await uwearAboutClient.get<TAboutContent>({
    endpoint: `about/${articleId}`,
  });
  const aboutData = await uwearAboutClient.get<TAbout>({
    endpoint: `about`,
    queries: { filters: `id[not_equals]${articleId}` },
  });
  return { props: { article, aboutData }, revalidate: 60 };
};

type TProps = {
  article: TAboutContent;
  aboutData: TAbout;
};

const AboutContent: NextPage<TProps> = ({ article, aboutData }: TProps) => {
  return (
    <div className="h-full">
      <NextSeo
        title={`${article.title}`}
        openGraph={{
          images: [
            {
              url: article.image
                ? article.image.url
                : `https://uwear.jp/images/meta/ogp.jpg`,
              width: 1200,
              height: 630,
              alt: article.title,
            },
          ],
        }}
      />
      <AboutContentWrapper article={article} aboutData={aboutData} />
    </div>
  );
};

export default AboutContent;
