import { ItemCard } from "../../baseParts/ItemCard";

export const WhatToResolve = () => {
  return (
    <div className={`w-[100%]`}>
      <img src="/images/resolves/resolve-1.png" alt="resolve-1" />
      <div>
        <p>UWearでできること</p>
        <p>Service Value</p>
      </div>
      <div>
        <ItemCard
          className="m-10"
          imageFileName="/images/resolves/resolve-2.png"
          title="あああ"
          description="あああ"
        />
      </div>
    </div>
  );
};
