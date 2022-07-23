type TProps = {
  imageNames: {
    left: string;
    right: string;
  };
  className?: string;
};

export const KeyVisualColumn = ({ imageNames, className }: TProps) => {
  return (
    <div className="flex">
      <div className="relative">
        <div
          className={`w-full h-full z-10 absolute inset-0 bg-clay ${
            className ?? ""
          } `}
        ></div>
        <img
          src={`/images/keyVisuals/main/${imageNames.left}.svg`}
          alt={`key-visual-${imageNames.left}`}
        />
      </div>
      <div className="relative">
        <div
          className={`w-full h-full z-10 absolute inset-0 bg-clay ${
            className ?? ""
          } `}
        ></div>
        <img
          src={`/images/keyVisuals/main/${imageNames.right}.svg`}
          alt={`key-visual-${imageNames.right}`}
        />
      </div>
    </div>
  );
};
