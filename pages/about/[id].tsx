import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { NewsContent } from "../../src/components/news/NewsContent";
import { Header } from "../../src/components/plan/Header";
import { FooterMenu } from "../../src/components/top/FooterMenu";
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
      <div
        id="container"
        className="h-full min-h-screen inset-0 text-themeGray"
      >
        <Header lists={[{ name: `${article.title}` }]} />
        <img src={article.image.url} alt={article.title} className="w-full" />
        <div className="px-4">
          <div className="w-full py-12 border-b-[1px] border-[#D8D8D2]">
            <h2 className="pt-2 text-xl font-bold">{`${article.title}`}</h2>
          </div>
          <div className="py-12 text-sm">
            <NewsContent content={article?.content} />
          </div>
        </div>
        <div className="pb-24">
          <h3 className="border-b-[1px] border-[#D8D8D2] mx-4 text-2xl">
            関連記事
          </h3>
          <div className="flex w-full">
            {aboutData.contents.map((data) => (
              <Link href={`/about/${data.id}`} key={data.id}>
                <div className="w-[50%] p-4 border-x-[1px] border-[#D8D8D2]">
                  <img
                    src={data.image.url}
                    alt={data.title}
                    className="w-full h-[30vw] sm:h-[150px] mx-auto object-cover"
                  />
                  <p className="text-sm mt-2">{data.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <FooterMenu />
      </div>
    </div>
  );
};
export default AboutContent;
