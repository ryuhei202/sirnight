import Image from "next/image";
type TProps = {
  readonly className?: string;
};
export const PointDescription = ({ className }: TProps) => {
  return (
    <div className={`w-[100%] mt-14 ${className ?? ""}`}>
      <div className="flex flex-row p-7">
        <div className="w-1/3">
          <p className="text-primary text-xs w-fit mx-auto border-b-2 border-dotted border-themeGray">
            Point
          </p>
          <h4 className="relative [writing-mode:vertical-rl] mx-auto text-sm pt-4">
            着るシーンにあわせた
            <br />
            最適な洋服が届きます
          </h4>
        </div>
        <Image
          src="/images/points/illust1.svg"
          alt="key-visual-1-2"
          className="w-2/3"
        />
      </div>
      <div className="flex flex-row p-7">
        <Image
          src="/images/points/illust2.svg"
          alt="key-visual-1-1"
          className="w-2/3"
        />
        <div className="w-1/3">
          <p className="text-primary text-xs w-fit mx-auto border-b-2 border-dotted border-themeGray">
            Point
          </p>
          <h4 className="relative [writing-mode:vertical-rl] mx-auto text-sm pt-4">
            スタイリストに
            <br />
            コーデの悩みを
            <br />
            いつでも相談できます
          </h4>
        </div>
      </div>
      <div className="flex flex-row p-7">
        <div className="w-1/3">
          <p className="text-primary text-xs w-fit mx-auto border-b-2 border-dotted border-themeGray">
            Point
          </p>
          <h4 className="relative [writing-mode:vertical-rl] mx-auto text-sm pt-4">
            動きやすさや快適さを
            <br />
            シーンごとに最適化した
            <br />
            オリジナルブランド
          </h4>
        </div>
        <Image
          src="/images/points/illust3.svg"
          alt="key-visual-1-1"
          className="w-2/3"
        />
      </div>
    </div>
  );
};
