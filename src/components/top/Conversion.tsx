import { Button } from "../baseParts/Button";

export const Conversion = () => {
  return (
    <div className="bg-themeGray h-[700px]">
      <div className="w-[62%] mx-auto pt-[98px] mb-10">
        <img src="/images/logo/white.svg" alt="logo-white" />
      </div>
      <div className="w-full h-[48%] flex">
        {/* TODO: アニメーションを実装 */}
        <div className="w-[18.5%] h-full relative">
          <p className="absolute h-full [writing-mode:vertical-rl] text-white left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-center">
            メンズファッションレンタルサービス
          </p>
        </div>
        <div className="w-[63%] h-full bg-white"></div>
        <div className="w-[18.5%] h-full relative">
          <p className="absolute h-full [writing-mode:vertical-rl] text-white left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-center">
            服の悩みを解決する
          </p>
        </div>
      </div>
      <div className="w-[73%] mx-auto">
        {/* TODO: Linkコンポーネントで囲む */}
        <Button border className="my-10">
          プランを選ぶ
        </Button>
      </div>
    </div>
  );
};
