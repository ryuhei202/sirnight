import Link from "next/link";
import { TPlan } from "../../models/plan/Plan";
import { LinkButton } from "../baseParts/LinkButton";

type TProps = {
  plan: TPlan;
  disabled: boolean;
};

export const PlanDetail = ({ plan, disabled }: TProps) => {
  return (
    <div
      className={`duration-1000 font-medium ${disabled ? "opacity-20" : ""}`}
    >
      <p className="text-center mb-12">{plan.description}</p>
      <div className="relative">
        <div className="absolute bg-themeGray rounded-full w-20 h-20 right-0 bottom-0 top-[-2.5rem]">
          <div className="relative mt-1">
            <img
              src="/images/icons/cloths/4.svg"
              alt="cloth-icon"
              className="relative w-1/2 m-auto"
            />
            {!plan.isJacketAvailable && (
              <p className="absolute text-red leading-none text-[3rem] top-0 right-1/2 transform translate-x-1/2">
                ×
              </p>
            )}
            <p className="text-xs text-clay text-center">
              {plan.isJacketAvailable ? (
                <>
                  ジャケット
                  <br />
                  あり
                </>
              ) : (
                <>
                  ジャケット
                  <br />
                  なし
                </>
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="border-solid border border-themeGray rounded-md mx-3">
        <div>
          {new Date() < new Date(2023, 9, 1) &&
          new Date() >= new Date(2023, 5, 26) ? (
            <>
              {/* 夏の初月半額キャンペーン */}
              {/* TODO: キャンペーン期間が過ぎたら削除 */}
              <div className="text-center bg-red font-lora w-full text-clay py-1">
                9/30まで初月半額キャンペーン中！！
              </div>
              <p className="text-center mt-6 mb-2 leading-none line-through font-lora">
                月額{`¥${plan.price.withoutTax.toLocaleString()}`}（税別）
                <br />
                <span className="line-through">{`¥${plan.price.withTax.toLocaleString()}（税込）`}</span>
              </p>
              <p className="text-center mb-6 leading-none text-red">
                月額
                <span className="text-[10vw] sm:text-4xl ml-2 font-lora font-bold">{`¥${(
                  plan.price.withoutTax / 2
                ).toLocaleString()}`}</span>
                （税別）
                <br />
                {`¥${(plan.price.withTax / 2).toLocaleString()}（税込）`}
              </p>
            </>
          ) : (
            <>
              <p className="text-center mt-6 mb-2 leading-none">
                月額
                <span className="text-[10vw] sm:text-4xl ml-2 font-lora font-bold">{`¥${plan.price.withoutTax.toLocaleString()}`}</span>
                （税別）
              </p>
              <div className="flex flex-wrap justify-center space-x-3 mb-6">
                <div className="text-[4vw] sm:text-xl ">
                  <span>{`¥${plan.price.withTax.toLocaleString()}（税込）`}</span>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="bg-themeGray text-clay text-center text-[4vw] sm:text-xl py-1">
          コーデ数
        </div>
        <div className="h-full font-medium flex flex-col justify-evenly">
          {new Date() < new Date(2023, 9, 1) &&
          new Date() >= new Date(2023, 5, 26) &&
          (plan.enName === "premium" || plan.enName === "standard") ? (
            <>
              {/* 夏のスタンダード・プレミアムアイテム１点追加キャンペーン */}
              {/* TODO: キャンペーン期間が過ぎたら削除 */}
              <div className="text-center bg-red font-lora w-full text-clay py-1">
                9/30までトップス１点追加キャンペーン中！！
              </div>
              <div className="mx-auto py-4">
                <p className="text-center mb-2 leading-none line-through font-lora text-xs sm:text-sm">
                  {plan.coordinateNum}コーデ / {plan.itemNum}アイテム
                </p>
                <p className="flex items-center text-center text-xs">
                  <span className="font-lora text-[7vw] sm:text-3xl mr-[1vw] sm:mr-1">
                    {plan.coordinateNum}
                  </span>
                  コーデ
                  <span className="mx-2">
                    <img
                      src="/images/icons/diagonal-line.svg"
                      alt="diagonal-line"
                      width="18vw"
                    />
                  </span>
                  <span className="font-lora text-[7vw] sm:text-3xl mr-[1vw] sm:mr-1 text-red">
                    {plan.itemNum + 1}
                  </span>
                  アイテム
                </p>
              </div>
              <hr className="border border-dashed border-[#C8C9C3]" />
              <div className="mx-auto py-4">
                <p className="text-center mb-2 leading-none line-through font-lora text-xs sm:text-sm">
                  トップス{plan.topsNum}+ボトムス{plan.bottomsNum}+ジャケット1
                </p>
                <p className="h-full flex items-center text-center text-xs sm:text-sm">
                  トップス
                  <span className="font-lora text-2xl mr-[1vw] sm:mr-1 ml-1 text-red">
                    {plan.topsNum + 1}
                  </span>
                  <span className="text-gray mx-1">＋</span>
                  ボトムス
                  <span className="font-lora text-2xl mr-[1vw] sm:mr-1 ml-1">
                    {plan.bottomsNum}
                  </span>
                  {plan.isJacketAvailable && (
                    <>
                      <span className="text-gray mx-1">＋</span>
                      <span className="flex flex-col text-xs text-left">
                        ジャケット or
                        <br />
                        ライトアウター
                      </span>
                      <span className="font-lora text-2xl mr-[1vw] sm:mr-1 ml-1">
                        1
                      </span>
                    </>
                  )}
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="mx-auto py-4">
                <p className="h-full flex items-center text-center text-xs">
                  <span className="font-lora text-[7vw] sm:text-3xl mr-[1vw] sm:mr-1">
                    {plan.coordinateNum}
                  </span>
                  コーデ
                  <span className="mx-2">
                    <img
                      src="/images/icons/diagonal-line.svg"
                      alt="diagonal-line"
                      width="18vw"
                    />
                  </span>
                  <span className="font-lora text-[7vw] sm:text-3xl mr-[1vw] sm:mr-1">
                    {plan.itemNum}
                  </span>
                  アイテム
                </p>
              </div>
              <hr className="border border-dashed border-[#C8C9C3]" />
              <div className="mx-auto py-4">
                <p className="h-full flex items-center text-center text-xs sm:text-sm">
                  トップス
                  <span className="font-lora text-2xl mr-[1vw] sm:mr-1 ml-1">
                    {plan.topsNum}
                  </span>
                  <span className="text-gray mx-1">＋</span>
                  ボトムス
                  <span className="font-lora text-2xl mr-[1vw] sm:mr-1 ml-1">
                    {plan.bottomsNum}
                  </span>
                  {plan.isJacketAvailable && (
                    <>
                      <span className="text-gray mx-1">＋</span>
                      <span className="flex flex-col text-xs text-left">
                        ジャケット or
                        <br />
                        ライトアウター
                      </span>
                      <span className="font-lora text-2xl mr-[1vw] sm:mr-1 ml-1">
                        1
                      </span>
                    </>
                  )}
                </p>
              </div>
            </>
          )}
        </div>
        <div className="bg-themeGray text-clay text-center text-[4vw] sm:text-xl py-1">
          ポイント
        </div>
        <div className="flex items-center text-center h-[5rem]">
          <p className="mx-auto text-sm">
            毎月決済時に
            <span className="font-lora text-[7vw] sm:text-2xl mr-[1vw] sm:mr-1 ml-1">
              {plan.point}
            </span>
            ポイント付与
          </p>
        </div>
        <div className="bg-themeGray text-clay text-center text-[4vw] sm:text-xl py-1">
          割引機能
        </div>
        <div className="flex flex-col text-xs ml-2">
          <p className="my-4">
            ・洋服は全て
            <span className="font-lora text-[7vw] sm:text-2xl mr-[1vw] sm:mr-1 ml-1">
              30
            </span>
            ％OFFで購入可能
          </p>
          <p className="mb-4">
            ・コーデ交換をしない場合、次月金額が割引（
            <Link
              href={"/faq/payment#fc24azedyv"}
              className="underline underline-offset-2"
            >
              詳細
            </Link>
            ）
          </p>
        </div>
      </div>
      <LinkButton
        href={`/register/${plan.enName}`}
        className="text-[4vw] sm:text-xl font-medium mt-6 mb-32 py-[4vw] sm:py-5"
        disabled={disabled}
      >
        このプランではじめる
      </LinkButton>
    </div>
  );
};
