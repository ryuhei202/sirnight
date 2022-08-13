import { Animation } from "./Animation";

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
  let titleSplit: string[];
  if (title) {
    titleSplit = title.toString().split("<br />");
  } else {
    titleSplit = [];
  }

  return (
    <Animation options={{ threshold: 0.3, triggerOnce: true }}>
      <div
        className={`relative border rounded border-themeGray ${
          className ?? ""
        }`}
      >
        <div className="relative">
          <div className="relative">
            <img src={imageFileName} alt="service-value" className="rounded" />
            {titleSplit.map((title, index) => (
              <p
                key={title}
                className={`absolute ${
                  index === 0 ? "bottom-0" : ""
                } bg-themeGray w-fit text-lg p-2`}
              >
                <span className="text-gray-100">{title}</span>
              </p>
            ))}
          </div>
          <div className={`p-4 ${titleSplit.length === 1 ? "" : "mt-12"} tracking-wide text-sm`}>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Animation>
  );
};
