import Image from "next/image";
import { useRouter } from "next/router";
import { analyzeEvent } from "../../lib/gtag";
import { LinkButton } from "../baseParts/LinkButton";
import { ConversionImages } from "./ConversionImages";

type TProps = {
  number: number;
  leftImagePath: string;
  rightImagePath: string;
};

export const Conversion = ({
  number,
  leftImagePath,
  rightImagePath,
}: TProps) => {
  const router = useRouter();
  const handleClick = () => {
    analyzeEvent({
      action: "click",
      category: `conversion_${number}th`,
    }).then(() => router.push("/plan"));
  };

  return (
    <div className="bg-themeGray overflow-hidden pt-5">
      <div className="w-[62%] mx-auto pt-[98px] mb-10">
        <Image
          src="/images/logos/white.svg"
          alt="logo-white"
          width={396}
          height={85}
        />
      </div>
      <div className="w-full flex">
        <div className="w-[20%] relative z-10">
          <p className="absolute h-full [writing-mode:vertical-rl] text-white left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-center">
            メンズファッションレンタルサービス
          </p>
        </div>
        <ConversionImages
          number={number}
          leftImagePath={leftImagePath}
          rightImagePath={rightImagePath}
        />
        <div className="w-[20%] relative z-10">
          <p className="absolute h-full [writing-mode:vertical-rl] text-white left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-center">
            服選びの面倒から解放する
          </p>
        </div>
      </div>
      <div className="w-[73%] mx-auto mb-16">
        <LinkButton
          href="/plan"
          onClick={handleClick}
          className="my-10 font-medium"
          border
        >
          プランを選ぶ
        </LinkButton>
      </div>
    </div>
  );
};
