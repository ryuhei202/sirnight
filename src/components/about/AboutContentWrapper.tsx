import Link from "next/link";
import { TAbout, TAboutContent } from "../../lib/microCMS/uwearAboutClient";
import { NewsContent } from "../news/NewsContent";
import { Header } from "../plan/Header";
import { FooterMenu } from "../top/FooterMenu";

type TProps = {
  article: TAboutContent;
  aboutData: TAbout;
};

export const AboutContentWrapper = ({ article, aboutData }: TProps) => {
  return (
    <div id="container" className="h-full min-h-screen inset-0 text-themeGray">
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
  );
};
