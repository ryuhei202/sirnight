export const HowToStart = () => {
  return (
    <div className="my-28 text-center">
      <span className="pb-2 text-2xl font-semibold border-b-2 border-dashed border-bottom border-themeGray">
        UWearのはじめ方
      </span>
      <ul className="flex mt-20 px-[60px] overflow-x-scroll whitespace-nowrap space-x-12 snap-x snap-mandatory hidden-scrollbar">
        <li className="flex-none px-2 w-[85%] snap-always snap-center">
          <img src="/images/howToStart/1-1.png" alt="howToStart1-1" />
          <p className="mt-4 text-lg">サイトから会員登録</p>
          <p className="mt-3 text-xs">
            <span>
              当サイトから
              <br />
              会員情報を登録してください。
            </span>
          </p>
        </li>
        <li className="flex-none px-2 w-[85%] snap-always snap-center">
          <img src="/images/howToStart/1-2.png" alt="howToStart1-1" />
          <p className="mt-4 text-lg">スタイリストをLINE登録</p>
          <p className="mt-3 text-xs">
            <span>
              登録後、スタイリストをご案内します。
              <br /> LINEで登録してください。
            </span>
          </p>
        </li>
        <li className="flex-none px-2 w-[85%] snap-always snap-center">
          <img src="/images/howToStart/1-3.png" alt="howToStart1-1" />
          <p className="mt-4 text-lg">スタイリストとやりとり</p>
          <p className="mt-3 text-xs">
            <span>
              スタイリストがコーデの利用シーンや
              <br />
              悩みをお聞きし、コーデをご提案します。
            </span>
          </p>
        </li>
        <li className="flex-none px-2 w-[85%] snap-always snap-center">
          <img src="/images/howToStart/1-4.png" alt="howToStart1-1" />
          <p className="mt-4 text-lg">コーデ受け取り</p>
          <p className="mt-3 text-xs">
            <span>
              配送先住所、もしくはヤマト営業所で
              <br />
              コーデをお受け取りください。
            </span>
          </p>
        </li>
      </ul>
    </div>
  );
};
