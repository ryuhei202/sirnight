import Link from "next/link";
import { useState } from "react";
import { TextAreaAlt } from "../baseParts/inputs/TextAreaAlt";
import { Stepper } from "./Stepper";

export const LoginForms = () => {
  const [isVisible, setIsVisible] = useState<Boolean>(false);

  return (
    <div className="h-full">
      <div className="px-6">
        <Stepper step="login" />
      </div>
      <div className="px-12 mt-12">
        <div className="text-sm text-[#CB5F58]">
          <p>*の項目は入力必須です</p>
        </div>
        <div></div>
        <div className="pt-12 flex flex-col">
          <div className="pt-8">
            <p className="pb-3">
              メールアドレス <span className="text-[#CB5F58]">*</span>
            </p>
            <input
              type="email"
              placeholder="info@leeap.jp"
              className="p-3 w-full rounded-md border border-themeGray bg-clay resize-none"
              onChange={() => {}}
              value=""
            ></input>
          </div>
          <div className="relative pt-8">
            <p className="pb-3">
              パスワード <span className="text-[#CB5F58]">*</span>
            </p>
            {isVisible ? (
              <>
                <input
                  type="password"
                  placeholder="半角英数字・記号、8~16文字以内"
                  onChange={() => {}}
                  value={""}
                  className="mb-[6px] p-3 w-full rounded-md border border-themeGray bg-clay resize-none"
                ></input>
                <div
                  onClick={() => setIsVisible(false)}
                  className="absolute right-[10px] bottom-[18px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
              </>
            ) : (
              <>
                <TextAreaAlt
                  value={""}
                  onChange={() => {}}
                  placeholder="半角英数字・記号、8~16文字以内"
                />
                <div
                  onClick={() => setIsVisible(true)}
                  className="absolute right-[10px] bottom-[18px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                </div>
              </>
            )}
          </div>
          <button className="relative inline-block p-3 text-center w-full font-medium text-base mt-12 rounded-full bg-themeGray text-slate-200">
            お支払い情報の入力へ
          </button>
          <div className="text-center text-xs pt-6 pb-24">
            <Link href="/">
              <span className="border-b-[1px] border-themeGray">
                サイトに戻る
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
