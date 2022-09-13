import { ServicePoint } from "./ServicePoint";

type TProps = {
  readonly className?: string;
};
export const PointDescription = ({ className }: TProps) => {
  return (
    <div className={`w-full ${className ?? ""}`}>
      <ServicePoint
        illustPosition="right"
        imagePath="/images/points/1.webp"
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
        imagePath="/images/points/2.webp"
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
        imagePath="/images/points/3.webp"
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
