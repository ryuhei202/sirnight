type TProps = {
  imageNames: {
    left: string;
    right: string;
  };
  rightAnimateClass?: string;
  leftAnimateClass?: string;
};

export const KeyVisualColumn = ({
  imageNames,
  rightAnimateClass,
  leftAnimateClass,
}: TProps) => {
  return (
    <div className="flex">
      <div className="relative">
        {leftAnimateClass !== undefined ? (
          <div
            className={`w-full h-full z-10 absolute inset-0 bg-clay ${leftAnimateClass}`}
          ></div>
        ) : (
          <></>
        )}
        <img
          src={`/images/keyVisuals/main/${imageNames.left}.png`}
          alt={`key-visual-${imageNames.left}`}
        />
      </div>
      <div className="relative">
        {rightAnimateClass !== undefined ? (
          <div
            className={`w-full h-full z-10 absolute inset-0 bg-clay ${rightAnimateClass}`}
          ></div>
        ) : (
          <></>
        )}
        <img
          src={`/images/keyVisuals/main/${imageNames.right}.png`}
          alt={`key-visual-${imageNames.right}`}
        />
      </div>
    </div>
  );
};
