import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  border?: boolean;
};

export const Button = ({ children, className, border }: Props) => {
  let classes: string[] = [
    "inline-block",
    "py-3",
    "mx-3",
    "text-center",
    "w-[calc(100%_-_24px)]",
    "font-medium",
    "text-base",
    "relative",
    "rounded-full",
    "bg-themeGray",
    "text-slate-200",
  ];

  if (border) classes.push("border-2 border-solid border-white");

  return (
    <a className={`${classes.join(" ")} ${className ?? ""}`}>{children}</a>
  );
};
