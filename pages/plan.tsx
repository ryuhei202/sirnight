import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Header } from "../src/components/plan/Header";
import { PlanDetail } from "../src/components/plan/PlanDetail";
import { FooterMenu } from "../src/components/top/FooterMenu";
import {
  LIGHT_PLAN,
  PREMIUM_PLAN,
  STANDARD_PLAN,
} from "../src/models/plan/Plan";

const Plan: NextPage = () => {
  const [selectedPlanId, setSelectedPlanId] = useState<number>(LIGHT_PLAN.id);
  const plans = [LIGHT_PLAN, STANDARD_PLAN, PREMIUM_PLAN];
  const carousel = useRef<HTMLDivElement>(null);

  const onClickLabel = (index: number, planId: number) => {
    if (typeof carousel.current!.scrollLeft === "undefined") return;

    carousel.current!.scrollLeft =
      (carousel.current!.offsetWidth as number) * index;
    setSelectedPlanId(planId);
  };

  const onScroll = (e: React.UIEvent<HTMLElement>) => {
    if (typeof carousel.current!.scrollLeft === "undefined") return;

    if (e.currentTarget.scrollLeft < carousel.current!.offsetWidth / 2) {
      setSelectedPlanId(LIGHT_PLAN.id);
    } else if (
      e.currentTarget.scrollLeft <
      (carousel.current!.offsetWidth * 3) / 2
    ) {
      setSelectedPlanId(STANDARD_PLAN.id);
    } else {
      setSelectedPlanId(PREMIUM_PLAN.id);
    }
  };

  return (
    <div className="h-full">
      <NextSeo title="プラン" />
      <div
        id="container"
        className="h-full min-h-screen inset-0 text-themeGray"
      >
        <Header lists={[{ name: "料金プラン" }]} />
        <h2 className="text-[10vw] sm:text-4xl my-[12vw] sm:my-20 text-center font-bold">
          料金プラン
        </h2>
        <div>
          <div id="tab" className="flex h-12 relative mb-8">
            {plans.map((plan, index) => (
              <div
                className={`w-1/3 flex justify-center items-center cursor-pointer mx-3 ${
                  selectedPlanId === plan.id
                    ? "border-b-2 border-themeGray"
                    : "border-b border-[#C7C9C4]"
                }`}
                onClick={() => onClickLabel(index, plan.id)}
                key={index}
              >
                <p
                  className={`font-bold text-[4vw] sm:text-xl cursor-pointer ${
                    selectedPlanId === plan.id ? "opacity-100" : "opacity-20"
                  }`}
                >
                  {plan.jpName}
                </p>
              </div>
            ))}
          </div>

          <div
            id="carousel"
            ref={carousel}
            className="flex overflow-x-auto snap-mandatory snap-x hidden-scrollbar"
            onScroll={onScroll}
          >
            {plans.map((plan, index) => (
              <div
                className={`snap-always snap-center w-[90%] h-full shrink-0 ${
                  index === 0 && "ml-[5%]"
                } ${index === plans.length - 1 && "mr-[5%]"}`}
                key={index}
              >
                <PlanDetail plan={plan} disabled={selectedPlanId !== plan.id} />
              </div>
            ))}
          </div>
          <div className="mx-[7%] pb-4 text-[3vw] sm:text-xs">
            <div className="flex">
              <span className="w-[8%]">※</span>
              <p>
                コーデのご利用シーンにジャケットorライトアウターが不要な場合、トップスを1点追加（スタンダード：4アイテム、プレミアム7アイテム）
              </p>
            </div>
          </div>
          <div className="mx-[7%] pb-36 text-[3vw] sm:text-xs text-[#979B9A] font-light">
            <div className="flex">
              <span className="w-[8%]">※</span>
              <div>
                <p>
                  返却期日までにご返却いただけない場合、延滞料金が発生します。延滞金は1ヶ月を30日とした場合の日割り料金×2の料金となっております。
                </p>
                <Link href={"/faq/return"}>
                  <a className="underline underline-offset-2">延滞金について</a>
                </Link>
              </div>
            </div>
            <br />
          </div>
        </div>
        <FooterMenu />
      </div>
    </div>
  );
};

export default Plan;
