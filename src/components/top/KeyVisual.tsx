type TProps = {
  readonly className?: string;
};
export const KeyVisual = ({ className }: TProps) => {
  return (
    <div className={`w-[100%] ${className ?? ""}`}>
      <div className="flex flex-row">
        <img
          src="/images/keyVisuals/main/1-1.svg"
          alt="key-visual-1-1"
          className="w-1/3"
        />
        <img
          src="/images/keyVisuals/main/1-2.svg"
          alt="key-visual-1-2"
          className="w-2/3"
        />
      </div>
      <div className="flex flex-row">
        <div className="w-2/3">
          {/* <div className="w-full h-full z-10 bg-clay slideOutOp"></div> */}
          <img src="/images/keyVisuals/main/2-1.svg" alt="key-visual-2-1" />
        </div>
        <div className="w-1/3">
          <img src="/images/keyVisuals/main/2-2.svg" alt="key-visual-2-2" />
        </div>
      </div>
      <div className="flex flex-row">
        <img
          src="/images/keyVisuals/main/3-1.svg"
          alt="key-visual-3-1"
          className="w-1/3"
        />
        <img
          src="/images/keyVisuals/main/3-2.svg"
          alt="key-visual-3-2"
          className="w-2/3"
        />
      </div>
    </div>
  );
};
