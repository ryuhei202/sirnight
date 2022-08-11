import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

type TProps = {
  children: ReactNode;
  animationClassName?: string;
  options?: {
    threshold: number;
    triggerOnce?: boolean;
    delay?: number;
  };
};

export const SlideIn = ({ children, animationClassName, options }: TProps) => {
  const { ref, inView } = useInView(
    options ?? {
      threshold: 1,
      triggerOnce: true,
    }
  );
  const className = animationClassName ?? "animate-slideIn";

  return (
    <div ref={ref} className={inView ? className : "opacity-0"}>
      {children}
    </div>
  );
};
