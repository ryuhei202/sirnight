import { useRouter } from "next/router";
import { useEffect } from "react";

export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? "";

export type TGAEvent = {
  readonly action: string;
  readonly category: string;
  readonly label?: string;
};

export const pageView = (path: string) => {
  window.gtag("config", GA_ID, {
    page_path: path,
  });
};

export const setUserId = async (userId: number) => {
  if (GA_ID === "") return;
  return window.gtag("config", GA_ID, {
    user_id: userId,
  });
};

export const analyzeEvent = async ({ action, category, label }: TGAEvent) => {
  if (GA_ID === "") return;
  return window.gtag("event", action, {
    event_category: category,
    event_label: label,
  });
};

export const usePageView = () => {
  const router = useRouter();
  useEffect(() => {
    if (GA_ID === "") return;
    const handleRouteChange = (path: string) => {
      pageView(path);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);
};
