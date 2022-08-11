import { useInView } from "react-intersection-observer";

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
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
    delay: 500,
  });

  let titleSplit: string[];
  if (title) {
    titleSplit = title.toString().split("<br />");
  } else {
    titleSplit = [];
  }

  return (
    <div
      className={`relative border-2 rounded border-themeGray ${
        className ?? ""
      } ${inView ? "animate-slideIn" : "opacity-0"}`}
      ref={ref}
    >
      <img src={imageFileName} alt={imageFileName} className="mb-12 rounded" />
      <div className="absolute top-[160px] left-0 mb-10">
        {titleSplit.map((title) => (
          <p key={title} className="bg-themeGray w-fit text-lg p-2">
            <span className="text-gray-100">{title}</span>
          </p>
        ))}
      </div>
      <div className="p-4 tracking-wide text-sm">
        <p>{description}</p>
      </div>
    </div>
  );
};
