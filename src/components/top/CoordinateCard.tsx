type TProps = {
  readonly imageFilePath: string;
  readonly coordinateNumber: string;
  readonly title: string;
  readonly mainText: React.ReactNode;
  readonly subText: React.ReactNode;
  readonly isBlur?: boolean;
};

export const CoordinateCard = ({
  imageFilePath,
  coordinateNumber,
  title,
  mainText,
  subText,
  isBlur = false,
}: TProps) => {
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
          <div className="absolute -bottom-1 h-[40vw] sm:h-[200px] w-full bg-gradient-to-b from-transparent to-clay"></div>
        </div>
      ) : (
        <div className="grid grid-rows-[var(--firstViewHeight)_1fr] w-full">
          <figure className="h-[calc(100vh-70px)] sticky top-0 left-0 z-10">
            <img
              src={imageFilePath}
              alt="coordinate"
              className="object-cover object-top h-[calc(100vh-70px)] w-full"
            />
          </figure>
          <div className="h-fit z-30 mt-[25vh] -mb-1 [transform:translate3d(0,0,0)]">
            <div className="flex flex-row w-full text-[2.5vw] sm:text-sm border-y border-themeGray font-medium">
              <p className="bg-themeGray text-clay w-1/4 text-[3vw] sm:text-sm text-center py-2.5">
                {coordinateNumber}
              </p>
              <p className="w-3/4 bg-clay text-[3vw] sm:text-sm px-5 py-2.5">
                {title}
              </p>
            </div>
            <div className="p-[5vw] sm:p-7 bg-clay">
              <p className="text-[min(4vw,15px)] sm:text-xl leading-[8vw] sm:leading-10 font-bold">
                <span className="pb-1 border-b-[1.5px] sm:border-b-2 border-dashed border-themeGray">
                  {mainText}
                </span>
              </p>
              <p className="text-[3vw] sm:text-sm mt-5">{subText}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
