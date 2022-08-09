import Link from "next/link";
import React from "react";

type TProps = {
  href: string;
  children?: React.ReactNode;
  className?: string;
  border?: boolean;
  disabled?: boolean;
};

export const LinkButton = ({
  href,
  children,
  className,
  border,
  disabled,
}: TProps) => {
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

  if (disabled)
    return (
      <span className={`${className ?? ""} ${classes.join(" ")}`}>
        {children}
      </span>
    );

  return (
    <Link href={href} passHref>
      <a href={href} className={`${className ?? ""} ${classes.join(" ")}`}>
        {children}
      </a>
    </Link>
  );
};
