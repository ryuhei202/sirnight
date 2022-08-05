import Link from "next/link";
import React from "react";
import { TPlan } from "../../models/plan/Plan";
import { LinkButton } from "../baseParts/LinkButton";
import { Cloths } from "./Cloths";

type TProps = {
  plan: TPlan;
  disabled: boolean;
};

const rowClassName = (index: number, length: number) => {
  let classes = [];
  if (index % 2 === 0) classes.push("border-r-2");
  if (length % 2 === 0) {
    if (index < length - 2) classes.push("border-b-2");
  } else {
    if (index < length - 1) classes.push("border-b-2");
  }
  return classes.join(" ");
};

export const PlanDetail = ({ plan, disabled }: TProps) => {
  return (
    <div className={`linear duration-1000 ${disabled ? "opacity-20" : ""}`}>
      <div className="border-solid border border-themeGray font-semibold rounded-md mx-3 tracking-wider">
        <div className="">
          <p className="text-center text-xl my-6">
            月額
            <span className="text-4xl ml-2 font-['Times']">{`¥${plan.price.withTax.toLocaleString()}`}</span>
            （税込）
          </p>
          <div className="flex font-normal flex-wrap justify-center space-x-3 mb-6">
            <p className="text-[#979B9A]">{`¥${plan.price.withoutTax.toLocaleString()}（税抜）`}</p>
          </div>
        </div>
        <div className="bg-themeGray text-clay text-center font-normal text-xl py-1">
          こんな方におすすめ
        </div>
        <div
          className={`h-44 flex flex-col justify-evenly ${
            plan.targets.length % 2 === 0 ? "" : ""
          }`}
        >
          {plan.targets.map((target, index) => (
            <React.Fragment key={index}>
              <p
                key={index}
                className={`text-md flex justify-center items-center`}
              >
                {target}
              </p>
              {index === plan.targets.length - 1 ? (
                <></>
              ) : (
                <hr className="border border-dashed border-[#C8C9C3]" />
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="bg-themeGray text-clay text-center font-normal text-xl py-1">
          シーン例
        </div>
        <div className="flex flex-wrap text-center">
          {plan.scenes.map((scene, index) => (
            <p
              className={`w-1/2 text-md py-4 border-dashed border-[#C8C9C3] ${rowClassName(
                index,
                plan.scenes.length
              )}`}
              key={index}
            >
              {typeof scene === "string" ? (
                scene
              ) : (
                <>
                  {scene.main}
                  <span className="font-normal ml-3">{scene.sub}</span>
                </>
              )}
            </p>
          ))}
        </div>
        <div className="bg-themeGray text-clay text-center font-normal text-xl py-1">
          コーデ数
        </div>
        <div className="mx-auto flex justify-center items-center">
          <Cloths planId={plan.id} />
          <div className="py-8">
            <p className="h-full flex">
              <span>{plan.coordinateNum}</span>コーデ<span>／</span>
              <span>{plan.itemNum}</span>アイテム
            </p>
          </div>
        </div>
      </div>
      <Link href="/register" passHref>
        <LinkButton className="text-xl font-semibold mt-6 mb-16 py-5">
          このプランではじめる
        </LinkButton>
      </Link>
    </div>
  );
};
