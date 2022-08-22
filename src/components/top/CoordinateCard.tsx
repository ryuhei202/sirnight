import { Animation } from "../baseParts/Animation";

type TProps = {
  readonly number: number;
  readonly imageFilePath: string;
  readonly title: string;
  readonly mainText: React.ReactNode;
  readonly subText: React.ReactNode;
  readonly isBlur?: boolean;
};

export const CoordinateCard = ({
  number,
  imageFilePath,
  title,
  mainText,
  subText,
  isBlur = false,
}: TProps) => {
  const figureZIndexClass = `z-[${number + 10}]`;
  const descZIndexClass = `z-[${number + 11}]`;

  return (
    <>
      {isBlur ? (
        <div className="relative">
          <figure>
            <img
              src={imageFilePath}
              alt="coordinate"
              className="object-cover object-top w-full h-[50vw] sm:h-[250px]"
            />
          </figure>
          <div className="absolute -bottom-1 h-[25vw] w-full bg-gradient-to-b from-transparent to-clay"></div>
        </div>
      ) : (
        <div className={`grid grid-rows-[var(--firstViewHeight)_1fr] w-full`}>
          <figure
            className={`h-[calc(100vh-70px)] relative ${figureZIndexClass}`}
          >
            <img
              src={imageFilePath}
              alt="coordinate"
              className="object-cover object-top h-[calc(100vh-70px)] w-full"
            />
          </figure>
          <Animation
            animationClassName="animate-slideInCoordinateDescription"
            options={{ threshold: 0.5, triggerOnce: true, rootMargin: "-70px" }}
          >
            <div
              className={`h-fit absolute bottom-0 bg-clay ${descZIndexClass}`}
            >
              <div className="flex flex-row w-full text-[2.5vw] sm:text-sm border-y border-themeGray font-semibold">
                <h2 className="bg-themeGray text-clay w-1/4 text-center py-2.5">
                  {`コーデ#${number.toString().padStart(2, "0")}`}
                </h2>
                <p className="w-3/4 text-[3vw] sm:text-sm px-5 py-2.5">{title}</p>
              </div>
              <div className="p-[5vw] sm:p-7">
                <p className="text-[4vw] sm:text-xl leading-[8vw] sm:leading-10 font-semibold">
                  <span className="pb-1 border-b-[1.5px] sm:border-b-2 border-dashed border-themeGray">
                    {mainText}
                  </span>
                </p>
                <p className="text-[3vw] sm:text-sm mt-5">{subText}</p>
              </div>
            </div>
          </Animation>
        </div>
      )}
    </>
  );
};
