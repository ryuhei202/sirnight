import Link from "next/link";
import { TAbout, TAboutContent } from "../../lib/microCMS/uwearAboutClient";
import { Header } from "../baseParts/Header";
import { NewsContent } from "../news/NewsContent";
import { Breadcrumb } from "../plan/Breadcrumb";
import { FooterMenu } from "../top/FooterMenu";

type TProps = {
  article: TAboutContent;
  aboutData: TAbout;
};

export const AboutContentWrapper = ({ article, aboutData }: TProps) => {
  return (
    <div id="container" className="h-full min-h-screen inset-0 text-themeGray">
      {/* PCのみ表示する */}
      <div className="hidden sm:block">
        <Header />
      </div>
      <div className="md:w-[750px] mx-auto">
        <Breadcrumb
          lists={[{ name: `${article.title}` }]}
          className="mt-0 sm:mt-[64px]"
        />
        <img
          src={article.image.url}
          alt={article.title}
          className="w-full sm:h-[400px] sm:w-auto mx-auto"
        />
        <div className="px-4">
          <div className="w-full py-12 border-b-[1px] border-[#D8D8D2]">
            <h2 className="pt-2 text-xl md:text-3xl font-bold">{`${article.title}`}</h2>
          </div>
          <div className="text-sm">
            <NewsContent content={article?.content} />
          </div>
        </div>
      </div>
      <div className="pb-24 w-full md:w-[750px] xl:w-[1200px] mx-auto">
        <h3 className="border-b-[1px] border-[#D8D8D2] mx-4 py-4 text-3xl text-center">
          関連記事
        </h3>
        <div className="w-full flex flex-wrap justify-between">
          {aboutData.contents.map((data, i) => (
            <Link
              href={`/about/${data.id}`}
              key={data.id}
              className="w-full sm:w-[350px]"
            >
              <div
                className={`mx-4 p-8 border-[#D8D8D2] ${
                  aboutData.contents.length - 1 !== i ? "border-b-[2px]" : ""
                }`}
              >
                <img
                  src={data.image.url}
                  alt={data.title}
                  className="w-[70%] sm:w-[85%] mx-auto object-cover rounded-lg transform hover:-translate-y-1"
                />
                <p className="h-[100px] sm:h-[84px] text-2xl sm:text-lg mt-2 text-center overflow-hidden">
                  {data.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* スマホのみ表示する */}
      <div className="sm:hidden">
        <FooterMenu />
      </div>
    </div>
  );
};
