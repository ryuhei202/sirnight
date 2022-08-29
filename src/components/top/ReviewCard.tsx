import { ReactElement } from "react";
import { Animation } from "../baseParts/Animation";

type TProps = {
  customer: {
    imagePath: string;
    initial: string;
    age: number;
    address: string;
  };
  content: ReactElement;
  type: "left" | "right";
};

export const ReviewCard = ({ customer, content, type }: TProps) => {
  return (
    <Animation
      animationClassName={
        type === "left" ? "animate-slideInLeftSide" : "animate-slideInRightSide"
      }
      options={{ threshold: 1, triggerOnce: true }}
    >
      <div
        className={`w-full my-10 flex relative ${
          type === "left" ? "justify-end" : ""
        }`}
      >
        {type === "left" ? (
          <>
            <div className="absolute left-0 w-[15%]">
              <img src={customer.imagePath} alt="customer-icon" />
              <div className="mt-3">
                <p className="text-xs text-center">
                  {customer.initial}様
                  <br />
                  {customer.age}歳
                  <br />
                  {customer.address}
                </p>
              </div>
            </div>
            <p className="w-[80%] border-2 border-[#D8D8D2] rounded-[16px] p-[6vw] sm:p-7 text-sm">
              {content}
            </p>
          </>
        ) : (
          <>
            <p className="w-[80%] border-2 border-[#D8D8D2] rounded-[16px] p-[6vw] sm:p-7 text-sm">
              {content}
            </p>
            <div className="absolute right-0 w-[15%]">
              <img src={customer.imagePath} alt="customer-icon" />
              <div className="mt-3">
                <p className="text-xs text-center">
                  {customer.initial}様
                  <br />
                  {customer.age}歳
                  <br />
                  {customer.address}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </Animation>
  );
};
