import Link from "next/link";
import { PREFECTURES } from "../../models/TPrefectures";
import { DropdownMenuAlt } from "../baseParts/inputs/DropdownMenuAlt";
import { TextAreaAlt } from "../baseParts/inputs/TextAreaAlt";
import { Stepper } from "./Stepper";

export const BaseForms = () => {
  let yearOptions = [];
  for (let year = 1920; year <= new Date().getFullYear(); year++) {
    yearOptions.push(
      <option key={year} value={year}>
        {year}
      </option>
    );
  }

  return (
    <div className="h-full">
      <div className="px-6">
        <Stepper step="base" />
      </div>
      <div className="px-12 mt-12">
        <div className="text-sm text-[#CB5F58]">
          <p>*の項目は入力必須です</p>
        </div>
        <div></div>
        <div className="pt-12">
          <div className="flex">
            <div className="pr-2">
              <p className="pb-3">
                性 <span className="text-[#CB5F58]">*</span>
              </p>
              <TextAreaAlt value={""} onChange={() => {}} placeholder="山田" />
            </div>
            <div className="pl-2">
              <p className="pb-3">
                名 <span className="text-[#CB5F58]">*</span>
              </p>
              <TextAreaAlt value={""} onChange={() => {}} placeholder="太郎" />
            </div>
          </div>
          <div className="flex pt-8">
            <div className="pr-2">
              <p className="pb-3">
                セイ <span className="text-[#CB5F58]">*</span>
              </p>
              <TextAreaAlt
                value={""}
                onChange={() => {}}
                placeholder="ヤマダ"
              />
            </div>
            <div className="pl-2">
              <p className="pb-3">
                メイ <span className="text-[#CB5F58]">*</span>
              </p>
              <TextAreaAlt
                value={""}
                onChange={() => {}}
                placeholder="タロウ"
              />
            </div>
          </div>
          <div className="pt-8">
            <p className="pb-3">
              生年月日 <span className="text-[#CB5F58]">*</span>
            </p>
            <div className="flex">
              <DropdownMenuAlt
                value=""
                onChange={() => {}}
                placeholder="年"
                className="mr-2"
              >
                {yearOptions}
              </DropdownMenuAlt>
              <DropdownMenuAlt
                value=""
                onChange={() => {}}
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
                value=""
                onChange={() => {}}
                placeholder="日"
                className="ml-2"
              >
                {yearOptions}
              </DropdownMenuAlt>
            </div>
          </div>
          <div className="flex pt-8">
            <div className="pr-2 w-1/2">
              <p className="pb-3">
                身長 <span className="text-[#CB5F58]">*</span>
              </p>
              <input
                type="number"
                min="160"
                max="180"
                placeholder="身長"
                step="1"
                className="p-3 w-full rounded-md border border-themeGray bg-clay resize-none"
              />
            </div>
            <div className="pl-2 w-1/2">
              <p className="pb-3">
                体重 <span className="text-[#CB5F58]">*</span>
              </p>
              <input
                type="number"
                min="51"
                max="80"
                placeholder="体重"
                step="1"
                className="p-3 w-full rounded-md border border-themeGray bg-clay resize-none"
              />
            </div>
          </div>
          <div className="flex pt-8">
            <div className="w-full">
              <p className="pb-3">
                都道府県 <span className="text-[#CB5F58]">*</span>
              </p>
              <DropdownMenuAlt
                value=""
                onChange={() => {}}
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
          <button className="relative inline-block p-3 text-center w-full font-medium text-base mt-12 rounded-full bg-themeGray text-slate-200">
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
