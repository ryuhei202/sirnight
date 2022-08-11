import { ServicePoint } from "./ServicePoint";

type TProps = {
  readonly className?: string;
};
export const PointDescription = ({ className }: TProps) => {
  return (
    <div className={`w-full my-14 ${className ?? ""}`}>
      <ServicePoint
        illustPosition="right"
        imagePath="/images/points/illust1.png"
        content={
          <>
            着るシーンにあわせた
            <br />
            最適な洋服が届きます
          </>
        }
      />

      <ServicePoint
        illustPosition="left"
        imagePath="/images/points/illust2.png"
        content={
          <>
            スタイリストに
            <br />
            コーデの悩みを
            <br />
            いつでも相談できます
          </>
        }
      />

      <ServicePoint
        illustPosition="right"
        imagePath="/images/points/illust3.png"
        content={
          <>
            動きやすさや快適さを
            <br />
            シーンごとに最適化した
            <br />
            オリジナルブランド
          </>
        }
      />
    </div>
  );
};
