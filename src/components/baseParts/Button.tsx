import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  border?: boolean;
};

export const Button = ({ children, className, border }: Props) => {
  let classes: string[] = [
    "inline-block",
    "p-3",
    "text-center",
    "w-full",
    "font-medium",
    "text-base",
    "relative",
    "rounded-full",
    "bg-themeGray",
    "text-slate-200",
  ];

  if (border) classes.push("border-2 border-solid border-white");

  return (
    <a className={`${className ?? ""} ${classes.join(" ")}`}>{children}</a>
  );
};
