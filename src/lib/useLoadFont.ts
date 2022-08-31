import { useRouter } from "next/router";
import { useEffect } from "react";

export const useLoadFont = () => {
  const pathname = useRouter().pathname;
  useEffect(() => {
    Ts.loadFont();
  }, [pathname]);
};
