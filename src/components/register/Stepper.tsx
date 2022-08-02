type TProps = {
  readonly step: "base" | "login" | "payment";
};
export const Stepper = ({ step }: TProps) => {
  const baseClass =
    step === "base"
      ? "border-themeGray text-white bg-themeGray"
      : "border-[#C8C9C3] text-white bg-[#C8C9C3]";
  let loginClass = "";
  if (step === "login") {
    loginClass = "border-themeGray text-white bg-themeGray";
  } else if (step === "payment") {
    loginClass = "border-[#C8C9C3] text-white bg-[#C8C9C3]";
  }

  let paymentClass = "";
  if (step === "payment")
    paymentClass = "border-themeGray text-white bg-themeGray";

  return (
    <div className="w-full p-4">
      <div className="flex items-center">
        <div className="flex items-center relative">
          <div
            className={`rounded-full h-12 w-12 py-2 border-2 text-center text-xl ${baseClass}`}
          >
            <span>1</span>
          </div>
          <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium text-themeGray">
            基本情報
          </div>
        </div>
        <div className="flex-auto border-t-2 border-dotted border-themeGray"></div>
        <div className="flex items-center border-themeGray relative">
          <div
            className={`rounded-full h-12 w-12 py-2 border-2 border-themeGray text-center text-xl ${loginClass}`}
          >
            <span>2</span>
          </div>
          <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium text-themeGray">
            ログイン情報
          </div>
        </div>
        <div className="flex-auto border-t-2 border-dotted border-themeGray"></div>
        <div className="flex items-center text-themeGray relative">
          <div
            className={`rounded-full h-12 w-12 py-2 border-2 border-themeGray text-center text-xl ${paymentClass}`}
          >
            <span>3</span>
          </div>
          <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium text-themeGray">
            お支払い情報
          </div>
        </div>
      </div>
    </div>
  );
};
