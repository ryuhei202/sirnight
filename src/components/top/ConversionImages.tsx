import Image from "next/image";

type TProps = {
  number: number;
  leftImagePath: string;
  rightImagePath: string;
};

export const ConversionImages = ({
  number,
  leftImagePath,
  rightImagePath,
}: TProps) => {
  return (
    <div className="w-full h-auto relative z-0">
      <div id={`conversion-left-${number}`} className="origin-[50%_300%]">
        <Image
          src={leftImagePath}
          alt="conversion"
          className="w-4/5 mx-auto rotate-6 relative -z-10"
          width={420}
          height={582}
        />
      </div>
      <div className="absolute inset-0">
        <div id={`conversion-right-${number}`} className="origin-[50%_300%]">
          <Image
            src={rightImagePath}
            alt="conversion"
            className="w-4/5 mx-auto -rotate-6 relative z-0 transition"
            width={420}
            height={582}
          />
        </div>
      </div>
    </div>
  );
};
