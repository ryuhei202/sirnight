import { TPlan } from "../../models/plan/Plan";

type TProps = {
  plan: TPlan;
};

export const Plan = ({ plan }: TProps) => {
  return (
    <div className="border-solid border border-themeGray font-semibold rounded-md mx-3">
      <div>
        <p>
          月額
          <span className="text-lg">{`￥${plan.price.withTax.toLocaleString()}`}</span>
          （税込）
        </p>
        <div className="flex font-normal">
          <p>{`￥${plan.price.withoutTax.toLocaleString()}（税抜）`}</p>
          <p>継続割引について</p>
        </div>
      </div>
      <div className="bg-themeGray text-clay text-center">
        こんな方におすすめ
      </div>
      <div className="text-center">
        {plan.targets.map((target, index) => (
          <p key={index}>{target}</p>
        ))}
      </div>
      <div className="bg-themeGray text-clay text-center">シーン例</div>
      <div className="flex flex-wrap text-center">
        {plan.scenes.map((scene, index) =>
          typeof scene === "string" ? (
            <p className="w-1/2" key={index}>
              {scene}
            </p>
          ) : (
            <p className="w-1/2" key={index}>
              {scene.main}
              <span className="font-normal">{scene.sub}</span>
            </p>
          )
        )}
      </div>
      <div className="bg-themeGray text-clay text-center">コーデ数</div>
      <div className="flex">
        <div className="w-1/3 flex space-x-0">
          <img
            src="/images/icons/cloths/1.svg"
            alt="cloth-icon"
            className="w-1/3"
          />
          <img
            src="/images/icons/cloths/2.svg"
            alt="cloth-icon"
            className="w-1/3"
          />
          <img
            src="/images/icons/cloths/3.svg"
            alt="cloth-icon"
            className="w-1/3"
          />
        </div>
        <div className="w-2/3">
          <p>
            {plan.coordinateNum}コーデ<span>／</span>
            {plan.itemNum}アイテム
          </p>
        </div>
      </div>
    </div>
  );
};
