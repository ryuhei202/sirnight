export const InitialPage = () => {
  return (
    <div className="overflow-auto bg-clay h-screen">
      <div className="absolute top-[41%] left-1/2 translate-x-[-50%] w-[65%] text-center">
        <img
          src="/images/logo/gray.svg"
          alt="logo"
          className="animate-slideInOpLogo"
        />
        <p className="mt-6 text-sm opacity-0 animate-slideInOpText">
          服の悩みを解決する
        </p>
        <p className="text-sm opacity-0 animate-slideInOpSubText">
          メンズファッションレンタルサービス
        </p>
      </div>
    </div>
  );
};
