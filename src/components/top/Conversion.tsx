import { LinkButton } from "../baseParts/LinkButton";
import { ConversionImages } from "./ConversionImages";

export const Conversion = () => {
  return (
    <div className="bg-themeGray overflow-hidden pt-5">
      <div className="w-[62%] mx-auto pt-[98px] mb-10">
        <img src="/images/logos/white.svg" alt="logo-white" />
      </div>
      <div className="w-full flex">
        <div className="w-[20%] relative z-10">
          <p className="absolute h-full [writing-mode:vertical-rl] text-white left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-center">
            メンズファッションレンタルサービス
          </p>
        </div>
        <ConversionImages
          leftImagePath="/images/conversions/1.png"
          rightImagePath="/images/conversions/2.png"
        />
        <div className="w-[20%] relative z-10">
          <p className="absolute h-full [writing-mode:vertical-rl] text-white left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-center">
            服の悩みを解決する
          </p>
        </div>
      </div>
      <div className="w-[73%] mx-auto mb-16">
        <LinkButton href="/plan" className="my-10" border>
          プランを選ぶ
        </LinkButton>
      </div>
    </div>
  );
};
