import {
  LIGHT_PLAN,
  PREMIUM_PLAN,
  STANDARD_PLAN,
} from "../../models/plan/Plan";

type TProps = {
  planId: number;
};

export const Cloths = ({ planId }: TProps) => {
  switch (planId) {
    case LIGHT_PLAN.id:
      return (
        <div className="w-1/3 flex py-8">
          <img
            src="/images/icons/cloths/1.svg"
            alt="cloth-icon"
            className="w-1/3 -mr-4 z-10"
          />
          <img
            src="/images/icons/cloths/2.svg"
            alt="cloth-icon"
            className="w-1/3 -mr-2"
          />
          <img
            src="/images/icons/cloths/3.svg"
            alt="cloth-icon"
            className="w-1/3 z-10"
          />
        </div>
      );
    case STANDARD_PLAN.id:
      return (
        <div className="w-1/3 flex py-8">
          <img
            src="/images/icons/cloths/4.svg"
            alt="cloth-icon"
            className="w-1/3 -mr-4 z-10"
          />
          <img
            src="/images/icons/cloths/1.svg"
            alt="cloth-icon"
            className="w-1/3 -mr-2"
          />
          <img
            src="/images/icons/cloths/3.svg"
            alt="cloth-icon"
            className="w-1/3 z-10"
          />
        </div>
      );
    case PREMIUM_PLAN.id:
      return (
        <div className="w-1/3 h-[111px] flex flex-wrap pt-5">
          <div className="my-auto">
            <div className="flex">
              <img
                src="/images/icons/cloths/1.svg"
                alt="cloth-icon"
                className="w-1/3 -mr-4 z-0"
              />
              <img
                src="/images/icons/cloths/2.svg"
                alt="cloth-icon"
                className="w-1/3 -mr-2"
              />
              <img
                src="/images/icons/cloths/3.svg"
                alt="cloth-icon"
                className="w-1/3 z-0"
              />
            </div>
            <div className="flex translate-x-[15%] translate-y-[-50%] z-20">
              <img
                src="/images/icons/cloths/4.svg"
                alt="cloth-icon"
                className="w-1/3 -mr-4 z-20"
              />
              <img
                src="/images/icons/cloths/1.svg"
                alt="cloth-icon"
                className="w-1/3 -mr-2 z-10"
              />
              <img
                src="/images/icons/cloths/3.svg"
                alt="cloth-icon"
                className="w-1/3 z-20"
              />
            </div>
          </div>
        </div>
      );
    default:
      return <></>;
  }
};
