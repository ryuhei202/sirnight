import { ReactNode } from "react";

type TProps = {
  readonly imageFileName: string;
  readonly title: React.ReactNode;
  readonly description: React.ReactNode;
  readonly className?: string;
};
export const ItemCard = ({
  imageFileName,
  title,
  description,
  className,
}: TProps) => {
  return (
    <div
      className={`relative bg-clay border-2 rounded-full border-themeGray ${
        className ?? ""
      }`}
    >
      <img src={imageFileName} alt={imageFileName} />
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};
