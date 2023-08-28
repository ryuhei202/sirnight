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
            スタイリストが
            <br />
            洋服を着るシーンを
            <br />
            聞きます
          </>
        }
      />

      <ServicePoint
        illustPosition="left"
        imagePath="/images/points/2.webp"
        content={
          <>
            スタイリストが
            <br />
            考えたコーデを
            <br />
            お届けします
          </>
        }
      />

      <ServicePoint
        illustPosition="right"
        imagePath="/images/points/3.webp"
        content={
          <>
            お届けしたコーデを
            <br />
            自由に着用してください
          </>
        }
      />

      <ServicePoint
        illustPosition="left"
        imagePath="/images/points/4.webp"
        content={
          <>
            コンビニから
            <br />
            伝票なしで返却できます
          </>
        }
      />
    </div>
  );
};
