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
    <Animation options={{ threshold: 0.5, triggerOnce: true }}>
      <div
        className={`relative border rounded-[6px] border-themeGray ${
          className ?? ""
        }`}
      >
        <div className="relative">
          <div className="relative">
            <img src={imageFileName} alt="service-value" />
            {titleSplit.map((title, index) => (
              <p
                key={index}
                className={`absolute ${
                  index === 0 ? "-bottom-3" : ""
                } bg-themeGray w-fit font-semibold text-[4vw] sm:text-lg p-2`}
              >
                <span className="text-gray-100">{title}</span>
              </p>
            ))}
          </div>
          <div
            className={`font-hiragino400 p-[6vw] sm:p-6 ${
              titleSplit.length === 1 ? "mt-4" : "mt-12"
            } text-sm`}
          >
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Animation>
  );
};
