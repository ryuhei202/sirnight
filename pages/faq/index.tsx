import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { Typography } from "../../src/components/baseParts/Typography";
import { Header } from "../../src/components/plan/Header";
import { FooterMenu } from "../../src/components/top/FooterMenu";
import {
  TCategory,
  uwearFaqClient,
} from "../../src/lib/microCMS/uwearFaqClient";

type TProps = {
  faqData: TCategory;
};
const index: NextPage<TProps> = ({ faqData }) => {
  return (
    <div>
      <NextSeo title="FAQ" />
      <div className="h-full min-h-screen text-themeGray">
        <Header lists={[{ name: "お知らせ" }]} />
        <div className="w-4/5 pt-14 mx-auto pb-40">
          <p className="text-3xl text-center font-extrabold mb-14">FAQ</p>
          {faqData.contents.map((content, index) => (
            <Link href={`/faq/${content.id}`} key={index}>
              <a
                className={`block py-10 border-[#D8D8D2] border-t ${
                  index === faqData.contents.length - 1
                    ? "border-b border-[#D8D8D2]"
                    : ""
                }`}
              >
                <Typography size="sm" className="block" component="span">
                  {content.name}
                </Typography>
              </a>
            </Link>
          ))}
        </div>
        <FooterMenu />
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const faqData = await uwearFaqClient.get<TCategory>({
    endpoint: "category",
  });
  return {
    props: {
      faqData,
    },
  };
};
export default index;
