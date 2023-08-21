import { GetStaticProps } from "next";
import { ReactElement } from "react";
import { AboutContentWrapper } from "../../src/components/about/AboutContentWrapper";
import { ArticleLayout } from "../../src/components/article/ArticleLayout";
import {
  TAbout,
  TAboutContent,
  uwearAboutClient,
} from "../../src/lib/microCMS/uwearAboutClient";
import { NextPageWithLayout } from "../_app";

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

const AboutContent: NextPageWithLayout<TProps> = ({
  article,
  aboutData,
}: TProps) => {
  return (
    <div className="h-full">
      <AboutContentWrapper article={article} aboutData={aboutData} />
    </div>
  );
};

AboutContent.getLayout = function getLayout(page: ReactElement) {
  return <ArticleLayout>{page}</ArticleLayout>;
};

export default AboutContent;
