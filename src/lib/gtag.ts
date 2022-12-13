export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? "";

export type TGAEvent = {
  readonly action: string;
  readonly category: string;
  readonly label?: string;
};

export const setUserId = async (userId: number) => {
  if (GA_ID === "") return;
  return window.gtag("config", GA_ID, {
    user_id: userId,
  });
};

export const trackConversion = async (planName: string) => {
  if (GA_ID === "") return;
  return window.gtag("event", "register", {
    event_category: planName,
  });
};

export const analyzeEvent = async ({ action, category, label }: TGAEvent) => {
  if (GA_ID === "") return;
  return window.gtag("event", action, {
    event_category: category,
    event_label: label,
  });
};
