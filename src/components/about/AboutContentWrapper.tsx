import Image from "next/image";
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
      <Image
        src={article.image.url}
        alt={article.title}
        className="w-full"
        width={638}
        height={638}
      />
      <div className="px-4">
        <div className="w-full py-12 border-b-[1px] border-[#D8D8D2]">
          <h2 className="pt-2 text-xl font-bold">{`${article.title}`}</h2>
        </div>
        <div className="py-12 text-sm">
          <NewsContent content={article?.content} />
        </div>
      </div>
      <div className="pb-24">
        <h3 className="border-b-[1px] border-[#D8D8D2] mx-4 py-4 text-3xl text-center">
          関連記事
        </h3>
        <div className="w-full">
          {aboutData.contents.map((data, i) => (
            <Link href={`/about/${data.id}`} key={data.id}>
              <div
                className={`mx-4 p-8 border-[#D8D8D2] ${
                  aboutData.contents.length - 1 !== i ? "border-b-[2px]" : ""
                }`}
              >
                <Image
                  src={data.image.url}
                  alt={data.title}
                  className="w-[70%] mx-auto object-cover"
                  width={380}
                  height={380}
                />
                <p className="text-2xl mt-2 text-center">{data.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FooterMenu />
    </div>
  );
};
