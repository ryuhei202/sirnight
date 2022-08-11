import { ReactElement } from "react";
import { SlideIn } from "../baseParts/SlideIn";

type TProps = {
  customer: {
    imagePath: string;
    age: number;
    work: string;
  };
  content: ReactElement;
  type: "left" | "right";
};

export const ReviewCard = ({ customer, content, type }: TProps) => {
  return (
    <SlideIn>
      <div
        className={`w-full my-10 flex relative ${
          type === "left" ? "" : "justify-end"
        }`}
      >
        {type === "left" ? (
          <>
            <p className="w-[80%] border-2 border-[#D8D8D2] rounded-[16px] p-5 text-xs tracking-wider">
              {content}
            </p>
            <div className="absolute right-0 w-[15%]">
              <img src={customer.imagePath} alt="customer-icon" />
              <div className="mt-3">
                <p className="text-xs text-center">
                  {customer.age + "代"}
                  <br />
                  {customer.work}
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="absolute left-0 text-center w-[15%]">
              <img src={customer.imagePath} alt="customer-icon" />
              <div className="mt-3">
                <p className="text-xs">
                  {customer.age + "代"}
                  <br />
                  {customer.work}
                </p>
              </div>
            </div>
            <p className="w-[80%] border-2 border-[#D8D8D2] rounded-[16px] p-5 text-xs tracking-wider">
              {content}
            </p>
          </>
        )}
      </div>
    </SlideIn>
  );
};
