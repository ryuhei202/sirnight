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
    rootMargin?: string;
  };
};

export const Animation = ({
  children,
  animationClassName,
  preAnimationClassName,
  options,
}: TProps) => {
  const { ref, inView } = useInView({
    threshold: options?.threshold ?? 1,
    triggerOnce: options?.triggerOnce ?? true,
    delay: options?.delay ?? 0,
    rootMargin: options?.rootMargin ?? undefined,
  });
  const animateClassName = animationClassName ?? "animate-slideIn";
  const preAnimateClassName = preAnimationClassName ?? "opacity-0";

  return (
    <div ref={ref} className={inView ? animateClassName : preAnimateClassName}>
      {children}
    </div>
  );
};
