type TProps = {
  type: "tops" | "bottoms";
};

export const ItemList = ({ type }: TProps) => {
  return (
    <div className="w-[200%] flex first:mb-7">
      <ul
        className={`w-[50%] flex bg-clay ${
          type === "tops"
            ? "animate-infiniteSlideLeft"
            : "animate-infiniteSlideRight"
        }`}
      >
        {[...Array(type === "tops" ? 3 : 4)].map((_, index) => (
          <li key={index} className="mx-2">
            <img
              src={`/images/items/${type}/${index + 1}.png`}
              alt={`items-${type}-${index + 1}`}
              key={index}
            />
          </li>
        ))}
      </ul>
      <ul
        className={`w-[50%] flex bg-clay ${
          type === "tops"
            ? "animate-infiniteSlideLeft"
            : "animate-infiniteSlideRight"
        }`}
      >
        {[...Array(type === "tops" ? 3 : 4)].map((_, index) => (
          <li key={index} className="mx-2">
            <img
              src={`/images/items/${type}/${index + 1}.png`}
              alt={`items-${type}-${index + 1}`}
              key={index}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
