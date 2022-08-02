type TProps = {
  readonly className?: string;
};
export const PointDescription = ({ className }: TProps) => {
  return (
    <div className={`w-[100%] my-14 ${className ?? ""}`}>
      <div className="relative flex flex-row p-7">
        <div className="w-2/5">
          <p className="text-primary text-xs w-fit mx-auto border-b-2 border-dotted border-themeGray">
            Point
          </p>
          <h4 className="relative [writing-mode:vertical-rl] mx-auto text-xl pt-4 font-semibold">
            着るシーンにあわせた
            <br />
            最適な洋服が届きます
          </h4>
        </div>
        <img
          src="/images/points/illust1.png"
          alt="key-visual-1-2"
          className="h-[280px] absolute top-1 right-0 sm:right-5 mix-blend-darken"
        />
      </div>
      <div className="relative flex flex-row justify-end p-7">
        <img
          src="/images/points/illust2.png"
          alt="key-visual-1-1"
          className="h-[280px] absolute top-1 left-0 sm:left-5 mix-blend-darken"
        />
        <div className="w-2/5">
          <p className="text-primary text-xs w-fit mx-auto border-b-2 border-dotted border-themeGray">
            Point
          </p>
          <h4 className="relative [writing-mode:vertical-rl] mx-auto text-xl pt-4 font-semibold">
            スタイリストに
            <br />
            コーデの悩みを
            <br />
            いつでも相談できます
          </h4>
        </div>
      </div>
      <div className="relative flex flex-row p-7">
        <div className="w-2/5">
          <p className="text-primary text-xs w-fit mx-auto border-b-2 border-dotted border-themeGray">
            Point
          </p>
          <h4 className="relative [writing-mode:vertical-rl] mx-auto text-xl pt-4 font-semibold">
            動きやすさや快適さを
            <br />
            シーンごとに最適化した
            <br />
            オリジナルブランド
          </h4>
        </div>
        <img
          src="/images/points/illust3.png"
          alt="key-visual-1-1"
          className="h-[280px] absolute top-1 right-0 sm:right-5 mix-blend-darken"
        />
      </div>
    </div>
  );
};
