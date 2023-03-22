import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { Layout } from "../src/components/baseParts/Layout";
import { NewsContent } from "../src/components/news/NewsContent";
import { Header } from "../src/components/plan/Header";
import { FooterMenu } from "../src/components/top/FooterMenu";
import {
  TCompany,
  TCompanyContent,
  uwearClient,
} from "../src/lib/microCMS/uwearClient";

export const getStaticPaths = async () => {
  const articlesData = await uwearClient.get<TCompany>({
    endpoint: "company",
  });
  const paths = articlesData.contents.map(
    (data: TCompanyContent) => `/${data.id}`
  );
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (content) => {
  const data = await uwearClient.get<TCompanyContent>({
    endpoint: `company/${content.params?.id}`,
  });
  return { props: data, revalidate: 60 };
};

const CompanyContent: NextPage<TCompanyContent> = (
  article: TCompanyContent
) => {
  return (
    <div>
      <NextSeo title={article.title} />
      <div
        id="container"
        className="h-full min-h-screen inset-0 text-themeGray"
      >
        <Header lists={[{ name: article.title }]} />
        <Layout title={article.title}>
          <NewsContent content={article.content} />
        </Layout>
        <FooterMenu />
      </div>
    </div>
  );
};
export default CompanyContent;
