import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { LinkButton } from "../../src/components/baseParts/LinkButton";
import { Header } from "../../src/components/plan/Header";
import { FooterMenu } from "../../src/components/top/FooterMenu";
import { QuestionAnswer } from "../../src/components/top/QuestionAnswer";
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
  console.log(faqContents);
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
        <div>
          <div className="bg-clay py-28" id="faq">
            <p className="text-[6vw] sm:text-2xl text-center font-extrabold mb-14">{`${faqContents.contents[0].category?.name}`}</p>
            <div>
              {faqContents.contents.map((content) => {
                return (
                  <QuestionAnswer
                    question={content.question}
                    answer={content.answer}
                    key={content.id}
                  />
                );
              })}
            </div>
            <div className="text-center">
              <LinkButton
                href={"/faq"}
                variant="text"
                className="w-3/4 font-bold text-base mt-12 mb-48 rounded-full border"
              >
                FAQ一覧に戻る
              </LinkButton>
            </div>
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
