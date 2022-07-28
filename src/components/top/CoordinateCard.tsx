import Image from "next/image";

type TProps = {
  readonly imageFilePath: string;
  readonly title: string;
  readonly mainText: React.ReactNode;
  readonly subText: React.ReactNode;
};
export const CoordinateCard = ({
  imageFilePath,
  title,
  mainText,
  subText,
}: TProps) => {
  return (
    <div className="relative grid grid-rows-[var(--firstViewHeight)_1fr] w-full">
      <figure className="h-[calc(100vh-8rem)] sticky top-0 left-0 z-10">
        <Image
          src={imageFilePath}
          alt="coordinate"
          className="object-cover h-[calc(100vh-8rem)] w-full"
        />
      </figure>
      <div className="relative h-fit bg-clay z-30">
        <div className="flex flex-row w-full text-[0.3rem] border-[1px] border-themeGray">
          <h2 className="bg-themeGray text-clay w-3/4 px-4 py-2.5">{title}</h2>
          <button className="px-2 py-1">
            <span>
              理由を見る
              <svg
                className="inline w-fit h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <div className="px-6 py-6">
          <p className="text-xl">
            <span className="border-b-2 border-dotted border-bottom border-themeGray">
              {mainText}
            </span>
          </p>
          <p className="text-sm mt-5">{subText}</p>
        </div>
      </div>
    </div>
  );
};
