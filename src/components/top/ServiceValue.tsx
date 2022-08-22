import { Animation } from "../baseParts/Animation";

export const ServiceValue = () => {
  return (
    <div className="w-full py-28">
      <div className="w-[73%] mx-auto leading-relaxed tracking-wide text-[8vw] sm:text-4xl sm:[70%]">
        <p className="my-3">
          毎日の
          <span className="px-3 py-2 mx-2 border border-dashed border-themeGray">
            着る
          </span>
          が
        </p>
        <p className="text-right mt-5 sm:mt-10">楽しくなるように</p>
      </div>
      <div className="w-full my-14">
        <img src="/images/serviceValue/1.webp" alt="service-value" />
      </div>
      <div className="w-[73%] mx-auto font-semibold text-[max(3vw,0.85em)] text-primary leading-6 sm:text-base sm:leading-loose">
        <Animation>
          <p className="mb-5">
            UWearでは、
            <br />
            お客様の「毎日の着る」を
            <br />
            少しでも楽しくしたいと考えています。
          </p>
        </Animation>
        <Animation>
          <p className="mb-10">
            そのためには、
            <br />
            洋服の悩みがない状態を保つこと、
            <br />
            悩みや疑問が出たときに
            <br />
            すぐに解決できる環境を
            <br />
            UWearを通じて作りたいと思っています。
          </p>
        </Animation>
        <Animation>
          <p className="mb-5">
            UWearは
            <br />
            YOU(あなた)とWEAR(着る)を
            <br />
            掛け合わせた造語です。
          </p>
        </Animation>
        <Animation>
          <p className="mb-5">
            あなたの着る悩みを
            <br />
            スタイリストと一緒に考え、
            <br />
            毎日の着るが楽しいを作るサービスです。
          </p>
        </Animation>
        <Animation>
          <p>
            あなたの着る悩みを何でも聞かせてださい。
            <br />
            着る悩みが無くなったら、
            <br />
            ぜひスタイリストと一緒に新たな洋服に
            <br />
            チャレンジが出来ると嬉しいです。
          </p>
        </Animation>
      </div>
    </div>
  );
};
