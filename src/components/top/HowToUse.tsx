import { StepUse } from "./StepUse";

export const HowToUse = () => {
  return (
    <div id="flow">
      <div className="relative h-[133.33vw] sm:h-[666.66px]">
        <img
          src="/images/keyVisuals/sub/2.webp"
          alt="keyVisuals-5"
          className="absolute"
        />
        <div className="absolute bottom-0 left-1/2 translate-x-[-50%] h-[50%] w-full text-white text-[6vw] sm:text-3xl text-center bg-gradient-to-b from-transparent to-black/80">
          <div className="absolute bottom-0 w-full mb-[12vw] sm:mb-16 leading-[1.5em]">
            <p className="mb-1">スタイリストが</p>
            <p className="bg-themeGray px-4 py-2 mb-1 border border-dashed border-white inline-block">
              あなたに最適なコーデ
            </p>
            <p>を提案します</p>
          </div>
        </div>
      </div>
      <div className="bg-themeGray pt-[12vw] pb-[20vw] sm:pt-16 sm:pb-24 text-white">
        <ul className="px-[60px] flex overflow-x-scroll space-x-8 snap-x snap-mandatory hidden-scrollbar">
          <StepUse
            number={1}
            imagePath="/images/howToUse/1.gif"
            title={
              <>
                コーデの利用シーンと悩みを
                <br />
                お聞きします
              </>
            }
          />
          <StepUse
            number={2}
            imagePath="/images/howToUse/2.gif"
            title={
              <>
                利用シーンと悩みにあわせた
                <br />
                コーデを提案します
              </>
            }
          />
          <StepUse
            number={3}
            imagePath="/images/howToUse/3.gif"
            title={
              <>
                今回のコーデが
                <br />
                あなたに最適な理由を説明します
              </>
            }
          />
          <StepUse
            number={4}
            imagePath="/images/howToUse/4.webp"
            title={
              <>
                利用した感想をお聞きし、
                <br />
                次回以降のコーデをより良くします
              </>
            }
          />
        </ul>
      </div>
    </div>
  );
};
