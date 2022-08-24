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
      <div className="py-[12vw] sm:py-16">
        <ul className="px-[60px] flex overflow-x-scroll space-x-8 snap-x snap-mandatory hidden-scrollbar">
          <li className="flex-none w-full snap-always snap-center text-center">
            <p className="font-lora font-semibold">STEP 01</p>
            <p className="mx-auto mt-0.5 w-[5%] h-[1px] border-b border-dashed border-themeGray"></p>
            <p className="mt-5 font-semibold sm:text-xl">
              コーデの利用シーンと悩みを
              <br />
              お聞きします
            </p>
            <img
              src="/images/howToUse/1-1.png"
              alt="howToUse1-1"
              className="mt-7"
            />
          </li>
          <li className="flex-none w-full snap-always snap-center text-center">
            <p className="font-lora font-semibold">STEP 02</p>
            <p className="mx-auto mt-0.5 w-[5%] h-[1px] border-b border-dashed border-themeGray"></p>
            <p className="mt-5 font-semibold sm:text-xl">
              利用シーンと悩みにあわせた
              <br />
              コーデを提案します
            </p>
            <img
              src="/images/howToUse/1-2.png"
              alt="howToUse1-2"
              className="mt-7"
            />
          </li>
          <li className="flex-none w-full snap-always snap-center text-center">
            <p className="font-lora font-semibold">STEP 03</p>
            <p className="mx-auto mt-0.5 w-[5%] h-[1px] border-b border-dashed border-themeGray"></p>
            <p className="mt-5 font-semibold sm:text-xl">
              今回のコーデが
              <br />
              あなたに最適な理由を説明します
            </p>
            <img
              src="/images/howToUse/1-3.png"
              alt="howToUse1-3"
              className="mt-7"
            />
          </li>
          <li className="flex-none w-full snap-always snap-center text-center">
            <p className="font-lora font-semibold">STEP 04</p>
            <p className="mx-auto mt-0.5 w-[5%] h-[1px] border-b border-dashed border-themeGray"></p>
            <p className="mt-5 font-semibold sm:text-xl">
              次回のコーデに活かすため
              <br />
              着用の感想をお聞きします
            </p>
            <img
              src="/images/howToUse/1-4.png"
              alt="howToUse1-4"
              className="mt-7"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
