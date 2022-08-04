import { AxiosResponse } from "axios";
import Link from "next/link";
import { useState } from "react";
import { TValidationBaseResponse } from "../../api/validations/TValidationBaseResponse";
import { useValidationsBase } from "../../api/validations/useValidationsBase";
import { TBaseRegisterData } from "../../models/register/TBaseRegisterData";
import { PREFECTURES, TPrefectures } from "../../models/shared/TPrefectures";
import { DropdownMenuAlt } from "../baseParts/inputs/DropdownMenuAlt";
import { FrontValidText } from "../baseParts/inputs/FrontValidText";
import { TextAreaAlt } from "../baseParts/inputs/TextAreaAlt";
import { Stepper } from "./Stepper";

type TProps = {
  readonly onSubmit: ({
    firstName,
    lastName,
    firstNameKana,
    lastNameKana,
    birthDay,
    height,
    weight,
    prefecture,
  }: TBaseRegisterData) => void;
};

export const BaseForms = ({ onSubmit }: TProps) => {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [firstNameKana, setFirstNameKana] = useState<string>();
  const [lastNameKana, setLastNameKana] = useState<string>();
  const [birthYear, setBirthYear] = useState<number>();
  const [birthMonth, setBirthMonth] = useState<number>();
  const [birthDay, setBirthDay] = useState<number>();
  const [height, setHeight] = useState<number>();
  const [weight, setWeight] = useState<number>();
  const [prefecture, setPrefecture] = useState<TPrefectures>();

  const [errors, setErrors] = useState<string[]>([]);

  const { mutate, isLoading } = useValidationsBase();

  let yearOptions = [];
  for (let year = 1920; year <= new Date().getFullYear(); year++) {
    yearOptions.push(
      <option key={year} value={year}>
        {year}
      </option>
    );
  }
  const validKana = (name: string) => {
    return name.match(/^[ァ-ヶー　]+$/);
  };
  const validHeight = !!height && height >= 160 && height <= 180;
  const validWeight = !!weight && weight >= 51 && weight <= 80;
  const validFirstNameKana = !!firstNameKana && validKana(firstNameKana);
  const validLastNameKana = !!lastNameKana && validKana(lastNameKana);

  const canRegistered =
    validHeight &&
    validWeight &&
    !!prefecture &&
    !!firstName &&
    !!lastName &&
    validFirstNameKana &&
    validLastNameKana &&
    !!birthYear &&
    !!birthMonth &&
    !!birthDay;

  // 年と月から何日あるか取得する
  const getDate = () => {
    if (birthYear === undefined || birthMonth === undefined) return 0;
    return new Date(birthYear, birthMonth, 0).getDate();
  };

  const handleSubmit = () => {
    if (canRegistered) {
      const params = {
        height,
        weight,
        prefecture,
      };
      mutate(params, {
        onSuccess: (data: AxiosResponse<TValidationBaseResponse>) => {
          if (data.data.errors.length <= 0) {
            onSubmit({
              firstName,
              lastName,
              firstNameKana,
              lastNameKana,
              birthDay: new Date(birthYear, birthMonth - birthDay),
              height,
              weight,
              prefecture,
            });
          } else {
            setErrors(data.data.errors);
          }
        },
        onError: () => {
          setErrors(["予期せぬエラーが発生しました"]);
        },
      });
    }
  };

  return (
    <div className="h-full">
      <div className="px-6">
        <Stepper step="base" />
      </div>
      <div className="px-12 mt-12">
        <div className="text-sm text-[#CB5F58]">
          <p>*の項目は入力必須です</p>
          <p>同じLINEアカウントでは複数登録できません</p>
        </div>
        <div className="mt-12">
          {errors.map((error) => (
            <p className="bg-[#CB5F58] text-clay p-3">{error}</p>
          ))}
        </div>
        <div className="pt-12">
          <div className="flex">
            <div className="pr-2">
              <label htmlFor="lastName">
                性 <span className="text-[#CB5F58]">*</span>
              </label>
              <TextAreaAlt
                id="lastName"
                className="mt-3"
                value={lastName ?? ""}
                onChange={(e) => setLastName(e.target.value as string)}
                placeholder="山田"
              />
            </div>
            <div className="pl-2">
              <label id="firstName">
                名 <span className="text-[#CB5F58]">*</span>
              </label>
              <TextAreaAlt
                id="firstName"
                className="mt-3"
                value={firstName ?? ""}
                onChange={(e) => setFirstName(e.target.value as string)}
                placeholder="太郎"
              />
            </div>
          </div>
          <div className="flex pt-8">
            <div className="pr-2">
              <label htmlFor="lastNameKana">
                セイ <span className="text-[#CB5F58]">*</span>
              </label>
              <TextAreaAlt
                id="lastNameKana"
                className="mt-3"
                value={lastNameKana ?? ""}
                onChange={(e) => setLastNameKana(e.target.value as string)}
                placeholder="ヤマダ"
              />
              {!validLastNameKana && <FrontValidText text="カタカナ入力です" />}
            </div>
            <div className="pl-2">
              <label htmlFor="firstNameKana">
                メイ <span className="text-[#CB5F58]">*</span>
              </label>
              <TextAreaAlt
                id="firstNameKana"
                className="mt-3"
                value={firstNameKana ?? ""}
                onChange={(e) => setFirstNameKana(e.target.value as string)}
                placeholder="タロウ"
              />
              {!validFirstNameKana && (
                <FrontValidText text="カタカナ入力です" />
              )}
            </div>
          </div>
          <div className="pt-8">
            <label>
              生年月日 <span className="text-[#CB5F58]">*</span>
            </label>
            <div className="flex mt-3">
              <DropdownMenuAlt
                value={birthYear?.toString() ?? ""}
                onChange={(e) => setBirthYear(parseInt(e.target.value))}
                placeholder="年"
                className="mr-2"
              >
                {yearOptions}
              </DropdownMenuAlt>
              <DropdownMenuAlt
                value={birthMonth?.toString() ?? ""}
                onChange={(e) => setBirthMonth(parseInt(e.target.value))}
                placeholder="月"
                className="mx-2"
              >
                {[...Array(12)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </DropdownMenuAlt>
              <DropdownMenuAlt
                value={birthDay?.toString() ?? ""}
                onChange={(e) => setBirthDay(parseInt(e.target.value))}
                placeholder="日"
                className="ml-2"
              >
                {[...Array(getDate())].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </DropdownMenuAlt>
            </div>
          </div>
          <div className="flex pt-8">
            <div className="pr-2 w-1/2">
              <label htmlFor="height">
                身長 <span className="text-[#CB5F58]">*</span>
              </label>
              <input
                id="height"
                type="number"
                value={height}
                onChange={(e) => setHeight(parseInt(e.target.value))}
                min="160"
                max="180"
                placeholder="身長"
                step="1"
                className="p-3 mt-3 w-full rounded-md border border-themeGray bg-clay resize-none"
              />
              {(!height || 160 > height || 180 < height) && (
                <FrontValidText text="160cm~180cmで入力" />
              )}
            </div>
            <div className="pl-2 w-1/2">
              <label htmlFor="weight">
                体重 <span className="text-[#CB5F58]">*</span>
              </label>
              <input
                id="weight"
                type="number"
                value={weight}
                onChange={(e) => setWeight(parseInt(e.target.value))}
                min="51"
                max="80"
                placeholder="体重"
                step="1"
                className="p-3 mt-3 w-full rounded-md border border-themeGray bg-clay resize-none"
              />
              {(!weight || 51 > weight || 80 < weight) && (
                <FrontValidText text="51kg~80kgで入力" />
              )}
            </div>
          </div>
          <div className="flex pt-8">
            <div className="w-full">
              <p className="pb-3">
                都道府県 <span className="text-[#CB5F58]">*</span>
              </p>
              <DropdownMenuAlt
                value={prefecture ?? ""}
                onChange={(e) => setPrefecture(e.target.value as TPrefectures)}
                placeholder="都道府県"
              >
                {Object.values(PREFECTURES).map((pref) => (
                  <option key={pref} value={pref}>
                    {pref}
                  </option>
                ))}
              </DropdownMenuAlt>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            disabled={!canRegistered || isLoading}
            className={`relative inline-block p-3 text-center w-full font-medium text-base mt-12 rounded-full bg-themeGray text-slate-200 ${
              (!canRegistered || isLoading) && "bg-[#C8C9C3]"
            }`}
          >
            ログイン情報の入力へ
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
