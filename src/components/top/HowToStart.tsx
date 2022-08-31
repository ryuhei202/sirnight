import { StepStart } from "./StepStart";

export const HowToStart = () => {
  return (
    <div className="mt-8 pt-24 pb-28 text-center" id="how-to-start">
      <span className="pb-2 text-[6vw] sm:text-2xl font-semibold border-b-2 border-dashed border-bottom border-themeGray">
        UWearのはじめ方
      </span>
      <ul className="flex pt-16 overflow-x-scroll whitespace-nowrap snap-x snap-mandatory hidden-scrollbar">
        <StepStart
          number={1}
          title="会員登録とLINEお友達登録"
          subTitle={
            <>
              サイトから会員登録をし、UWearの
              <br />
              LINEアカウントをお友達追加します。
            </>
          }
          className="ml-12"
        />
        <StepStart
          number={2}
          title="利用したいシーンを回答"
          subTitle={
            <>
              コーデを利用したいシーンを
              <br />
              選択します。
            </>
          }
        />
        <StepStart
          number={3}
          title="コーデの受け取り"
          subTitle={
            <>
              指定した配送先で
              <br />
              コーデを受け取ります。
            </>
          }
        />
        <StepStart
          number={4}
          title="着こなしの不安を解消し利用開始"
          subTitle={
            <>
              コーデを試着し、不安な点をスタイリストに相談し
              <br />
              解消してからコーデの利用を開始します。
            </>
          }
          className="pr-12"
        />
      </ul>
    </div>
  );
};
