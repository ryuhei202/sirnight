import Image from "next/image";

type TProps = {
  readonly text: string;
  readonly name: string;
  readonly image: string;
  readonly isLeft: boolean;
};
export const SpeechBalloon = ({ text, name, image, isLeft }: TProps) => {
  return isLeft ? (
    <div className="flex w-full min-h-[80px] mb-12">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className="rounded-full object-cover w-[50px] h-[50px]"
        />
        <p>{name}</p>
      </div>
      <div className="bg-white rounded-lg ml-[16px] w-[calc(100%-50px)]">
        <div
          className="p-4 h-full flex items-center"
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
      </div>
    </div>
  ) : (
    <div className="flex justify-end w-full min-h-[80px] mb-12">
      <div className="bg-white rounded-lg mr-[16px] w-[calc(100%-50px)]">
        <div
          className="p-4 h-full flex items-center"
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className="rounded-full object-cover w-[50px] h-[50px]"
        />
        <p>{name}</p>
      </div>
    </div>
  );
};
