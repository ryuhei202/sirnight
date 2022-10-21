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
    </div>
  );
};
