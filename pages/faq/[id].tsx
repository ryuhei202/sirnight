import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { LinkButton } from "../../src/components/baseParts/LinkButton";
import { Header } from "../../src/components/plan/Header";
import { FooterMenu } from "../../src/components/top/FooterMenu";
import {
  TCategory,
  TCategoryContent,
  TFaq,
  uwearFaqClient,
} from "../../src/lib/microCMS/uwearFaqClient";
type TProps = {
  faqContents: TFaq;
};
export const FaqCategoryName: NextPage<TProps> = ({ faqContents }) => {
  return (
    <div className="h-full">
      <NextSeo title={`${faqContents.contents[0].category?.name}`} />
      <div
        id="container"
        className="h-full min-h-screen inset-0 text-themeGray"
      >
        <Header
          lists={[
            { name: "FAQ", path: "/faq" },
            { name: `${faqContents.contents[0].category?.name}` },
          ]}
        />
        <div className="px-10">
          <div className="py-12 border-b-[1px] border-[#D8D8D2]">
            <h2 className="pt-2 text-xl font-bold">{`${faqContents.contents[0].category?.name}`}</h2>
          </div>
          <div className="pt-12 text-sm">
            {/* <NewsContent content={article?.body} /> */}
            <LinkButton
              href={"/faq"}
              variant="text"
              className="w-full font-bold text-base mt-12 mb-48 rounded-full border"
            >
              FAQ一覧に戻る
            </LinkButton>
          </div>
        </div>
        <FooterMenu />
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const faqData = await uwearFaqClient.get<TCategory>({
    endpoint: "category",
  });
  const paths = faqData.contents.map(
    (data: TCategoryContent) => `/faq/${data.id}`
  );
  return {
    paths: paths,
    fallback: "blocking",
  };
};

// getStaticProps
export const getStaticProps: GetStaticProps = async (context) => {
  const faqContents = await uwearFaqClient.get<TFaq>({
    endpoint: "faq",
    queries: { filters: `category[equals]${context.params?.id}` },
  });
  return {
    props: {
      faqContents,
    },
  };
};
export default FaqCategoryName;
