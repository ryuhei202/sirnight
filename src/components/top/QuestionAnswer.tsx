import Link from "next/link";
import { useState } from "react";
type TProps = {
  contentId?: string;
  question: string;
  answer: string;
};

export const QuestionAnswer = ({ contentId, question, answer }: TProps) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive((prevState) => !prevState);
  return (
    <div
      className="border-t-2 border-solid border-[#D8D8D2] text-sm"
      id={contentId}
    >
      <Link
        href={{
          hash: contentId,
        }}
        scroll={false}
      >
        <div
          className="flex flex-row justify-between cursor-pointer py-8 px-[10%]"
          onClick={handleClick}
        >
          <p>{question}</p>
          <img
            src="/images/icons/arrow.svg"
            alt="arrow-icon"
            className={isActive ? "rotate-180" : ""}
          />
        </div>
      </Link>

      <div
        className={`pb-8 px-[10%] leading-6	font-normal ${
          isActive ? "mt-4" : "hidden"
        }`}
        dangerouslySetInnerHTML={{
          __html: answer,
        }}
      />
    </div>
  );
};
