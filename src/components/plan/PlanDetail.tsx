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
      className={`font-medium duration-1000 ${disabled ? "opacity-20" : ""}`}
    >
      <p className="mb-12 text-center">{plan.description}</p>
      <div className="relative">
        <div className="absolute bottom-0 right-0 top-[-2.5rem] h-20 w-20 rounded-full bg-themeGray">
          <div className="relative mt-1">
            <img
              src="/images/icons/cloths/4.svg"
              alt="cloth-icon"
              className="relative m-auto w-1/2"
            />
            {!plan.isJacketAvailable && (
              <p className="absolute right-1/2 top-0 translate-x-1/2 text-[3rem] leading-none text-red">
                ×
              </p>
            )}
            <p className="text-center text-xs text-clay">
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
      <div className="mx-3 rounded-md border border-solid border-themeGray">
        <div>
          {new Date() < new Date(2023, 9, 1) &&
          new Date() >= new Date(2023, 5, 26) ? (
            <>
              {/* 夏の初月半額キャンペーン */}
              {/* TODO: キャンペーン期間が過ぎたら削除 */}
              <div className="w-full bg-red py-1 text-center font-lora text-clay">
                9/30まで初月半額キャンペーン中！！
              </div>
              <p className="mb-2 mt-6 text-center font-lora leading-none line-through">
                月額{`¥${plan.price.withoutTax.toLocaleString()}`}（税別）
                <br />
                <span className="line-through">{`¥${plan.price.withTax.toLocaleString()}（税込）`}</span>
              </p>
              <p className="mb-6 text-center leading-none text-red">
                月額
                <span className="ml-2 font-lora text-[10vw] font-bold sm:text-4xl">{`¥${(
                  plan.price.withoutTax / 2
                ).toLocaleString()}`}</span>
                （税別）
                <br />
                {`¥${(plan.price.withTax / 2).toLocaleString()}（税込）`}
              </p>
            </>
          ) : (
            <>
              <p className="mb-2 mt-6 text-center leading-none">
                月額
                <span className="ml-2 font-lora text-[10vw] font-bold sm:text-4xl">{`¥${plan.price.withoutTax.toLocaleString()}`}</span>
                （税別）
              </p>
              <div className="mb-6 flex flex-wrap justify-center space-x-3">
                <div className="text-[4vw] sm:text-xl ">
                  <span>{`¥${plan.price.withTax.toLocaleString()}（税込）`}</span>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="bg-themeGray py-1 text-center text-[4vw] text-clay sm:text-xl">
          コーデ数
        </div>
        <div className="flex h-full flex-col justify-evenly font-medium">
          {new Date() < new Date(2023, 9, 1) &&
          new Date() >= new Date(2023, 5, 26) &&
          (plan.enName === "premium" || plan.enName === "standard") ? (
            <>
              {/* 夏のスタンダード・プレミアムアイテム１点追加キャンペーン */}
              {/* TODO: キャンペーン期間が過ぎたら削除 */}
              <div className="w-full bg-red py-1 text-center font-lora text-clay">
                9/30までトップス１点追加キャンペーン中！！
              </div>
              <div className="mx-auto py-4">
                <p className="mb-2 text-center font-lora text-xs leading-none line-through sm:text-sm">
                  {plan.coordinateNum}コーデ / {plan.itemNum}アイテム
                </p>
                <p className="flex items-center text-center text-xs">
                  <span className="mr-[1vw] font-lora text-[7vw] sm:mr-1 sm:text-3xl">
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
                  <span className="mr-[1vw] font-lora text-[7vw] text-red sm:mr-1 sm:text-3xl">
                    {plan.itemNum + 1}
                  </span>
                  アイテム
                </p>
              </div>
              <hr className="border border-dashed border-[#C8C9C3]" />
              <div className="mx-auto py-4">
                <p className="mb-2 text-center font-lora text-xs leading-none line-through sm:text-sm">
                  トップス{plan.topsNum}+ボトムス{plan.bottomsNum}+ジャケット1
                </p>
                <p className="flex h-full items-center text-center text-xs sm:text-sm">
                  トップス
                  <span className="ml-1 mr-[1vw] font-lora text-2xl text-red sm:mr-1">
                    {plan.topsNum + 1}
                  </span>
                  <span className="mx-1 text-gray">＋</span>
                  ボトムス
                  <span className="ml-1 mr-[1vw] font-lora text-2xl sm:mr-1">
                    {plan.bottomsNum}
                  </span>
                  {plan.isJacketAvailable && (
                    <>
                      <span className="mx-1 text-gray">＋</span>
                      <span className="flex flex-col text-left text-xs">
                        ジャケット or
                        <br />
                        ライトアウター
                      </span>
                      <span className="ml-1 mr-[1vw] font-lora text-2xl sm:mr-1">
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
                <p className="flex h-full items-center text-center text-xs">
                  <span className="mr-[1vw] font-lora text-[7vw] sm:mr-1 sm:text-3xl">
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
                  <span className="mr-[1vw] font-lora text-[7vw] sm:mr-1 sm:text-3xl">
                    {plan.itemNum}
                  </span>
                  アイテム
                </p>
              </div>
              <hr className="border border-dashed border-[#C8C9C3]" />
              <div className="mx-auto py-4">
                <p className="flex h-full items-center text-center text-xs sm:text-sm">
                  トップス
                  <span className="ml-1 mr-[1vw] font-lora text-2xl sm:mr-1">
                    {plan.topsNum}
                  </span>
                  <span className="mx-1 text-gray">＋</span>
                  ボトムス
                  <span className="ml-1 mr-[1vw] font-lora text-2xl sm:mr-1">
                    {plan.bottomsNum}
                  </span>
                  {plan.isJacketAvailable && (
                    <>
                      <span className="mx-1 text-gray">＋</span>
                      <span className="flex flex-col text-left text-xs">
                        ジャケット or
                        <br />
                        ライトアウター
                      </span>
                      <span className="ml-1 mr-[1vw] font-lora text-2xl sm:mr-1">
                        1
                      </span>
                    </>
                  )}
                </p>
              </div>
            </>
          )}
        </div>
        <div className="bg-themeGray py-1 text-center text-[4vw] text-clay sm:text-xl">
          ポイント
        </div>
        <div className="flex h-[5rem] items-center text-center">
          <p className="mx-auto text-sm">
            毎月決済時に
            <span className="ml-1 mr-[1vw] font-lora text-[7vw] sm:mr-1 sm:text-2xl">
              {plan.point}
            </span>
            ポイント付与
          </p>
        </div>
        <div className="bg-themeGray py-1 text-center text-[4vw] text-clay sm:text-xl">
          割引機能
        </div>
        <div className="ml-2 flex flex-col text-xs">
          <p className="my-4">
            ・洋服は全て
            <span className="ml-1 mr-[1vw] font-lora text-[7vw] sm:mr-1 sm:text-2xl">
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
        className="mb-32 mt-6 py-[4vw] text-[4vw] font-medium sm:py-5 sm:text-xl"
        disabled={disabled}
      >
        このプランではじめる
      </LinkButton>
    </div>
  );
};
