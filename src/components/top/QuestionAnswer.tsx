import { useEffect, useState } from "react";
import { ImageLink } from "../baseParts/ImageLink";
type TProps = {
  contentId?: string;
  question: string;
  answer: string;
};

export const QuestionAnswer = ({ contentId, question, answer }: TProps) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive((prevState) => !prevState);
  useEffect(() => {
    if (contentId === window.location.hash.split("#")[1]) {
      setIsActive(true);
      console.log(window.location.hash.split("#")[1]);
    }
  }, []);

  return (
    <div
      className="border-t-2 border-solid border-[#D8D8D2] text-sm px-[5%]"
      id={contentId}
    >
      <div className="grid grid-cols-8 py-8 items-center">
        <span className="col-span-1 justify-self-center">
          <ImageLink link={`#${contentId}`} />
        </span>
        <div className="col-span-7">
          <div
            className="flex flex-row justify-between cursor-pointer"
            onClick={handleClick}
          >
            <p>{question}</p>
            <img
              src="/images/icons/arrow.svg"
              alt="arrow-icon"
              className={`${isActive ? "rotate-180" : ""} ps-5`}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-8">
        <div
          className={`pb-8 leading-6 font-normal col-start-2 col-end-8 ${
            isActive ? "" : "hidden"
          }`}
          dangerouslySetInnerHTML={{
            __html: answer,
          }}
        />
      </div>
    </div>
  );
};
