import Link from "next/link";
import { TFaq } from "../../lib/microCMS/uwearFaqClient";
import { QuestionAnswer } from "./QuestionAnswer";

type TProps = {
  data: TFaq;
};

export const Faq = ({ data }: TProps) => {
  return (
    <div className="bg-clay py-28" id="faq">
      <p className="text-[6vw] sm:text-2xl text-center font-extrabold mb-14">
        よくあるご質問
      </p>
      <div className="border-b-2 border-solid border-[#D8D8D2]">
        {data.contents.map((content, index) => (
          <QuestionAnswer
            question={content.question}
            answer={content.answer}
            key={index}
          />
        ))}
      </div>
      <div className="bg-clay text-themeGray text-right mt-10 font-medium  w-4/5 mx-auto">
        <Link href={{ pathname: "/faq" }}>
          <a className="relative inline-block">
            <span className="text-xs mr-2 absolute top-[20%] -left-[20%]">
              &#9679;
            </span>
            もっと見る
          </a>
        </Link>
      </div>
    </div>
  );
};
