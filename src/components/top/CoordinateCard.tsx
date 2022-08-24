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
          <div className="absolute -bottom-1 h-[25vw] w-full bg-gradient-to-b from-transparent to-clay"></div>
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
          <div className="h-fit bg-clay z-30 mt-[25vh] -mb-1 [transform:translate3d(0,0,0)]">
            <div className="flex flex-row w-full text-sm border-y border-themeGray font-semibold">
              <h2 className="bg-themeGray text-clay w-1/4 text-center py-2.5">
                {coordinateNumber}
              </h2>
              <p className="w-3/4 px-5 py-2.5">{title}</p>
            </div>
            <div className="px-6 py-6">
              <p className="text-xl">
                <span className="border-b-2 border-dashed border-themeGray">
                  {mainText}
                </span>
              </p>
              <p className="text-sm mt-5">{subText}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
