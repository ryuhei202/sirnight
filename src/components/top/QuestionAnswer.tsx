import { ReactNode, useState } from "react";

type TProps = {
  question: string;
  answer: ReactNode;
};

export const QuestionAnswer = ({ question, answer }: TProps) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive((prevState) => !prevState);
  return (
    <div
      className="py-8 px-[10%] flex justify-between cursor-pointer border-t-2 border-solid border-[#D8D8D2]"
      onClick={handleClick}
    >
      <div className="w-[90%] text-sm">
        <p>{question}</p>
        <p className={isActive ? "mt-4" : "hidden"}>{answer}</p>
      </div>
      <div className="w-[4%] pt-1">
        <img
          src="/images/icons/arrow.svg"
          alt="arrow-icon"
          className={isActive ? "rotate-180" : ""}
        />
      </div>
    </div>
  );
};
