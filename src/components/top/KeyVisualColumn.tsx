import Image from "next/image";

type TProps = {
  imageNames: {
    left: string;
    right: string;
  };
};

export const KeyVisualColumn = ({ imageNames }: TProps) => {
  return (
    <div className="flex flex-row">
      <div className="w-2/3 relative">
        <div className="w-full h-full z-10 absolute inset-0 bg-clay animate-fadeOutImg"></div>
        <Image
          src={`/images/keyVisuals/main/${imageNames.left}.svg`}
          alt={`key-visual-${imageNames.left}`}
          layout="fill"
        />
      </div>
      <div className="w-1/3">
        <div className="w-full h-full z-10 absolute inset-0 bg-clay animate-fadeOutImg"></div>
        <Image
          src={`/images/keyVisuals/main/${imageNames.right}.svg`}
          alt={`key-visual-${imageNames.right}`}
          layout="fill"
        />
      </div>
    </div>
  );
};
