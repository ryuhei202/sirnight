import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../../src/components/baseParts/Button";
import { Plan } from "../../src/components/plan/Plan";
import {
  LIGHT_PLAN,
  PREMIUM_PLAN,
  STANDARD_PLAN,
} from "../../src/models/plan/Plan";

const PlanPage: NextPage = () => {
  const [selectedPlanId, setSelectedPlanId] = useState<number>(LIGHT_PLAN.id);
  const carousel =
    typeof document !== "undefined"
      ? document.getElementById("carousel")
      : null;

  const onClickLabel = (index: number) => {
    if (typeof carousel?.scrollLeft === "undefined") return;

    carousel.scrollLeft = (carousel.offsetWidth as number) * index;
    setSelectedPlanId(index);
  };

  const onScroll = (e: React.UIEvent<HTMLElement>) => {
    if (typeof carousel?.scrollLeft === "undefined") return;

    if (e.currentTarget.scrollLeft < carousel.offsetWidth / 2) {
      setSelectedPlanId(LIGHT_PLAN.id);
    } else if (e.currentTarget.scrollLeft < (carousel.offsetWidth * 3) / 2) {
      setSelectedPlanId(STANDARD_PLAN.id);
    } else {
      setSelectedPlanId(PREMIUM_PLAN.id);
    }
  };

  return (
    <div className="h-full bg-clay sm:w-[500px]">
      <Head>
        <title>プラン | UWear公式サイト</title>
        <meta
          name="description"
          content="メンズファッションレンタルサービスUWear"
        />
        <link rel="icon" href="/favicon/favicon_head.png" />
      </Head>
      <div
        id="container"
        className="h-full bg-clay sm:w-[500px] inset-0 text-themeGray"
      >
        <div className="relative w-full p-2 text-[#979B9A]">
          <Link href="/">トップ</Link>
          <span>料金プラン</span>
        </div>
        <h2 className="text-3xl my-10 text-center font-bold">料金プラン</h2>
        <div>
          <div id="tab" className="flex h-[48px] relative mb-8">
            {[LIGHT_PLAN, STANDARD_PLAN, PREMIUM_PLAN].map((plan, index) => (
              <div
                className={`w-1/3 flex justify-center items-center cursor-pointer mx-3 ${
                  selectedPlanId === plan.id
                    ? "border-b-2 border-themeGray"
                    : "border-b border-[#C7C9C4]"
                }`}
                onClick={() => onClickLabel(plan.id)}
                key={index}
              >
                <p
                  className={`cursor-pointer ${
                    selectedPlanId === plan.id ? "opacity-100" : "opacity-20"
                  }`}
                >
                  {plan.name}
                </p>
              </div>
            ))}
          </div>

          <div
            id="carousel"
            className="flex overflow-x-auto w-full snap-mandatory snap-x hidden-scrollbar"
            onScroll={onScroll}
          >
            {[LIGHT_PLAN, STANDARD_PLAN, PREMIUM_PLAN].map((plan, index) => (
              <div
                className="snap-always snap-center w-full h-full shrink-0"
                key={index}
              >
                <Plan plan={plan} />
              </div>
            ))}
          </div>
          <Button className="font-semibold">このプランではじめる</Button>
        </div>
      </div>
    </div>
  );
};
export default PlanPage;
