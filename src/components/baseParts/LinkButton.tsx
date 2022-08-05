import React from "react";

type TProps = {
  children?: React.ReactNode;
  className?: string;
  border?: boolean;
  href?: string;
  onClick?: () => void;
};

export const LinkButton: React.FC<TProps> = React.forwardRef(
  ({ href, onClick, children, className, border }, _ref) => {
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
      "cursor-pointer"
    ];

    if (border) classes.push("border-2 border-solid border-white");

    return (
      <a
        href={href}
        onClick={onClick}
        className={`${className ?? ""} ${classes.join(" ")}`}
      >
        {children}
      </a>
    );
  }
);
