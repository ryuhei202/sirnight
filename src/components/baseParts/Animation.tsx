import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

type TProps = {
  children: ReactNode;
  animationClassName?: string;
  preAnimationClassName?: string;
  options?: {
    threshold: number;
    triggerOnce?: boolean;
    delay?: number;
  };
};

export const Animation = ({
  children,
  animationClassName,
  preAnimationClassName,
  options,
}: TProps) => {
  const { ref, inView } = useInView(
    options ?? {
      threshold: 1,
      triggerOnce: true,
    }
  );
  const animateClassName = animationClassName ?? "animate-slideIn";
  const preAnimateClassName = preAnimationClassName ?? "opacity-0";

  return (
    <div ref={ref} className={inView ? animateClassName : preAnimateClassName}>
      {children}
    </div>
  );
};
