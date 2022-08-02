import { Tab } from "@headlessui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Button } from "../../src/components/baseParts/Button";
import { Plan } from "../../src/components/plan/Plan";
import {
  LIGHT_PLAN,
  PREMIUM_PLAN,
  STANDARD_PLAN,
} from "../../src/models/plan/Plan";

const PlanPage: NextPage = () => {
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
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl p-1">
              {[LIGHT_PLAN, STANDARD_PLAN, PREMIUM_PLAN].map((plan, index) => (
                <Tab
                  className={({ selected }) =>
                    `w-full  py-2.5 font-medium leading-5 border-solid ${
                      selected
                        ? "border-themeGray border-b-2"
                        : "border-[#C7C9C4] border-b text-[#C7C9C4]"
                    }`
                  }
                  key={index}
                >
                  {plan.name}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              <div className="snap-x snap-mandatory">
                {[LIGHT_PLAN, STANDARD_PLAN, PREMIUM_PLAN].map(
                  (plan, index) => (
                    <Tab.Panel className="snap-always snap-center" key={index}>
                      <div>
                        <Plan plan={plan} />
                        <Button className="font-semibold">
                          このプランではじめる
                        </Button>
                      </div>
                    </Tab.Panel>
                  )
                )}
              </div>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};
export default PlanPage;
