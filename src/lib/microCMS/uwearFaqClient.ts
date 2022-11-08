import { createClient } from "microcms-js-sdk";

export const uwearFaqClient = createClient({
  serviceDomain: "uwear-faq",
  apiKey: `${process.env.NEXT_PUBLIC_MICRO_CMS_UWEAR_FAQ_API_KEY}`,
});

export type TFaq = {
  contents: TFaqContent[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type TCategory = {
  contents: TCategoryContent[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type TFaqContent = {
  id: string;
  question: string;
  answer: string;
  category: TCategoryContent;
  isDisplayTop: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type TCategoryContent = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
