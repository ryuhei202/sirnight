type TProps = {
  type: "tops" | "bottoms";
};

export const ItemList = ({ type }: TProps) => {
  return (
    <div
      className={`${type === "tops" ? "w-[500%]" : "w-[300%]"} flex first:mb-7`}
    >
      <ul
        className={`w-1/2 flex bg-clay ${
          type === "tops"
            ? "animate-infiniteSlideLeft"
            : "animate-infiniteSlideRight"
        }`}
      >
        <li className="mx-2">
          <img src={`/images/items/${type}.webp`} alt={`${type}-image`} />
        </li>
      </ul>
      <ul
        className={`w-1/2 flex bg-clay ${
          type === "tops"
            ? "animate-infiniteSlideLeft"
            : "animate-infiniteSlideRight"
        }`}
      >
        <li className="mx-2">
          <img src={`/images/items/${type}.webp`} alt={`${type}-image`} />
        </li>
      </ul>
    </div>
  );
};
