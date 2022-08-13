export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? "";

export type TGAEvent = {
  readonly action: string;
  readonly category: string;
  readonly label?: number;
};

export const pageView = (path: string) => {
  window.gtag("config", GA_ID, {
    page_path: path,
  });
};

export const analyzeEvent = ({ action, category, label }: TGAEvent) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: String(label),
  });
};
