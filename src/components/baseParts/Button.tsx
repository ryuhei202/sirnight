import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  border?: boolean;
  weight?: "normal" | "medium" | "bold";
  onClick?: () => void;
};

export const Button = ({
  children,
  className,
  border,
  weight,
  onClick,
}: Props) => {
  let classes: string[] = [
    "inline-block",
    "py-3",
    "mx-3",
    "text-center",
    "w-[calc(100%_-_24px)]",
    "relative",
    "rounded-full",
    "bg-themeGray",
    "text-slate-200",
  ];

  if (border) classes.push("border-2 border-solid border-white");

  classes.push(
    (() => {
      switch (weight) {
        case "medium":
          return "font-medium";
        case "bold":
          return "font-bold";
        case "normal":
        default:
          return "font-normal";
      }
    })()
  );

  return (
    <button
      onClick={onClick}
      className={`${classes.join(" ")} ${className ?? ""}`}
    >
      {children}
    </button>
  );
};
