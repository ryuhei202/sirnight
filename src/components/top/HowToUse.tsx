export const HowToUse = () => {
  return (
    <div>
      <div className="relative h-[133.33vw] sm:w-[100%] sm:h-[666.66px]">
        <img
          src="/images/keyVisuals/sub/5-1.png"
          alt="keyVisuals-5"
          className="absolute"
        />
        <div className="absolute bottom-0 left-1/2 translate-x-[-50%] h-[50%] w-full p-8 text-white text-2xl text-center bg-gradient-to-b from-transparent to-black ">
          <div className="w-[100%] mx-auto tracking-[0.15em] leading-[1.5em]">
            <p className="">スタイリストが</p>
            <p className="bg-themeGray p-2 border-2 border-dotted border-white">
              あなたに最適なコーデ
            </p>
            <p className="">を提案します</p>
          </div>
        </div>
      </div>
    </div>
  );
};
