import React from "react";

type TProps = {
  readonly children: React.ReactNode;
  readonly title: string;
  readonly className?: string;
};
export const Layout = ({ children, title, className }: TProps) => {
  return (
    <div className={`px-12 pb-32 ${className ?? ""}`}>
      <h2 className="py-12 text-3xl font-bold text-center">{title}</h2>
      <div className="newsContent">{children}</div>
    </div>
  );
};
