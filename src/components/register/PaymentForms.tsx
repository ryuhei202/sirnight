import { AxiosResponse } from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TValidationPaymentResponse } from "../../api/validations/TValidationPaymentResponse";
import { useValidationsPayment } from "../../api/validations/useValidationsPayment";
import { convertHalfWidthNumber } from "../../lib/convertHalfWidthNumber";
import { analyzeEvent } from "../../lib/gtag";
import { TPaymentRegisterData } from "../../models/register/TPaymentRegisterData";
import { Stepper } from "./Stepper";

type TProps = {
  memberId: number;
  planId: number;
  onSubmit: ({
    customerCardId,
    serialCode,
    maskedCardNumber,
    discount,
  }: TPaymentRegisterData) => void;
  onBack: () => void;
};

export const PaymentForms = ({
  memberId,
  planId,
  onSubmit,
  onBack,
}: TProps) => {
  const [cardNumber, setCardNumber] = useState<string>();
  const [expMonth, setExpMonth] = useState<number>();
  const [expYear, setExpYear] = useState<number>();
  const [cvc, setCvc] = useState<string>();
  const [cardName, setCardName] = useState<string>();
  const [serialCode, setSerialCode] = useState<string>();
  const [isAgree, setIsAgree] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[]>([]);
  const { mutate, isLoading } = useValidationsPayment();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [errors]);

  const canRegistered =
    !!cardNumber && !!expMonth && !!expYear && !!cvc && isAgree;

  const createTokenCallback = (paygentRes: {
    result: string;
    tokenizedCardObject?: {
      token: string;
      masked_card_number: string;
    };
  }) => {
    const SUCCESS = "0000";
    if (paygentRes.result !== SUCCESS) {
      setErrors(["クレジットカードに誤りがあります"]);
      return;
    }
    if (canRegistered && paygentRes.tokenizedCardObject) {
      const params = {
        cardToken: paygentRes.tokenizedCardObject.token,
        memberId,
        planId: planId,
        serialCode: !!serialCode ? serialCode : undefined,
      };
      mutate(params, {
        onSuccess: (data: void | AxiosResponse<TValidationPaymentResponse>) => {
          if (!data) return;

          if (data.data.errors.length > 0) {
            setErrors(data.data.errors);
            return;
          }
          const customerCardId = data.data.customerCardId;
          if (customerCardId === null) {
            setErrors([
              "予期せぬエラーが発生しました。お手数ですが再度入力お願い致します",
            ]);
            return;
          }
          const tokenizedCardObject = paygentRes.tokenizedCardObject;
          if (tokenizedCardObject) {
            analyzeEvent({ action: "submit", category: "payment" }).then(() =>
              onSubmit({
                customerCardId: customerCardId,
                serialCode: !!serialCode ? serialCode : undefined,
                maskedCardNumber: tokenizedCardObject.masked_card_number,
                discount: data.data.discount ?? undefined,
              })
            );
          }
        },
        onError: () => {
          setErrors(["予期せぬエラーが発生しました"]);
        },
      });
    }
  };

  // トークンを取得した後にPOSTリクエストを実行
  const getToken = () => {
    const paygentToken = new PaygentToken();

    paygentToken.createToken(
      process.env.NEXT_PUBLIC_MARCHANT_ID,
      process.env.NEXT_PUBLIC_TOKEN_KEY,
      {
        card_number: Number(cardNumber?.replace(/\s/g, "")),
        expire_year: expYear,
        expire_month: expMonth,
        cvc,
        name: cardName,
      },
      createTokenCallback
    );
  };

  const onClick = () => {
    getToken();
  };

  return (
    <div className="h-full">
      <div className="px-6">
        <Stepper step="payment" />
      </div>
      <div className="px-12 mt-12">
        <div className="text-sm text-[#CB5F58]">
          <p>*の項目は入力必須です</p>
          <p>登録してもまだ支払いは発生いたしません</p>
        </div>
        <div className="mt-12">
          {errors.map((error) => (
            <p key="error" className="bg-[#CB5F58] text-sm text-clay p-3 my-1">
              {error}
            </p>
          ))}
        </div>
        <div className="pt-12">
          <div>
            <label htmlFor="cc-number">
              クレジットカード番号 <span className="text-[#CB5F58]">*</span>
            </label>
            <input
              id="cc-number"
              autoComplete="cc-number"
              type="tel"
              value={cardNumber ?? ""}
              onChange={(e) => {
                const convertedNumber = convertHalfWidthNumber(e.target.value);
                // 4文字ごとに区切る
                const separatedNumber: Array<string> | null =
                  convertedNumber.match(/.{1,4}/g);
                setCardNumber(separatedNumber?.join(" "));
              }}
              placeholder="0000 0000 0000 0000"
              step="1"
              className="p-3 mt-3 w-full rounded-md border border-themeGray bg-clay resize-none"
            />
          </div>
          <div className="pt-8">
            <label>
              有効期限 <span className="text-[#CB5F58]">*</span>
            </label>
            <div className="flex items-end mt-3">
              <input
                type="number"
                min={1}
                max={12}
                value={expMonth ?? ""}
                onChange={(e) => {
                  if (
                    (e.target.value.match(/^[0-9]+/) &&
                      e.target.value.length <= 2) ||
                    e.target.value === ""
                  ) {
                    setExpMonth(parseInt(e.target.value) || undefined);
                  }
                }}
                autoComplete="cc-exp-month"
                placeholder="00"
                className="p-3 mr-2 w-full rounded-md border border-themeGray bg-clay resize-none"
              />
              <span className="w-1/3">月 /</span>
              <input
                type="number"
                min={1}
                max={99}
                value={expYear ?? ""}
                onChange={(e) => {
                  if (
                    e.target.value.match(/^[0-9]+/) ||
                    e.target.value === ""
                  ) {
                    const lastTwoDigits = e.target.value.slice(-2);
                    setExpYear(Number(lastTwoDigits) || undefined);
                  }
                }}
                autoComplete="cc-exp-year"
                placeholder="00"
                className="p-3 mx-2 w-full rounded-md border border-themeGray bg-clay resize-none"
              />
              <span className="">年</span>
            </div>
          </div>
          <div className="pt-8">
            <label htmlFor="csc">
              セキュリティコード <span className="text-[#CB5F58]">*</span>
            </label>
            <input
              id="csc"
              autoComplete="csc"
              value={cvc ?? ""}
              maxLength={4}
              onChange={(e) => {
                const convertedString = convertHalfWidthNumber(e.target.value);
                if (
                  (convertedString.match(/^[0-9]+/) &&
                    convertedString.length <= 4) ||
                  convertedString === ""
                ) {
                  setCvc(convertedString);
                }
              }}
              placeholder="000"
              step="1"
              className="p-3 mt-3 w-full rounded-md border border-themeGray bg-clay resize-none"
            />
          </div>
          <div className="pt-8">
            <label htmlFor="ccName">
              カード名義人 <span className="text-[#CB5F58]">*</span>
            </label>
            <input
              id="ccName"
              autoComplete="cc-name"
              value={cardName ?? ""}
              onChange={(e) => {
                const replacedHalfWidthSpace = e.target.value.replace(
                  /　/g,
                  " "
                );
                setCardName(replacedHalfWidthSpace);
              }}
              placeholder="TARO YAMADA"
              step="1"
              className="p-3 mt-3 w-full rounded-md border border-themeGray bg-clay resize-none"
            />
          </div>
          <div className="pt-8">
            <label htmlFor="serialCode">クーポンコード</label>
            <input
              id="serialCode"
              value={serialCode ?? ""}
              onChange={(e) => setSerialCode(e.target.value)}
              placeholder="お持ちの方のみ入力してください"
              step="1"
              className="p-3 mt-3 w-full rounded-md border border-themeGray bg-clay resize-none"
            />
          </div>
          <div className="text-center mt-12">
            <input
              id="isAgree"
              type="checkbox"
              checked={isAgree}
              onChange={() => setIsAgree(!isAgree)}
              className=""
            />
            <label htmlFor="isAgree">
              <span className="text-sm ml-2">
                <Link href="/term" target="_blank">

                  <span className="border-b-[1px] border-themeGray">
                    利用規約
                  </span>

                </Link>
                に同意する
              </span>
            </label>
          </div>
          <button
            onClick={onClick}
            disabled={!canRegistered || isLoading}
            className={`relative inline-block p-3 text-center w-full font-medium text-base mt-12 rounded-full bg-themeGray text-slate-200 ${
              (!canRegistered || isLoading) && "bg-[#C8C9C3]"
            }`}
          >
            確認画面へ
          </button>
          <div onClick={onBack} className="text-center text-xs mt-6 pb-24">
            <span className="border-b-[1px] border-themeGray">
              ログイン情報入力に戻る
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
