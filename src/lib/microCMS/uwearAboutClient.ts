import { createClient } from "microcms-js-sdk";

export const uwearAboutClient = createClient({
  serviceDomain: "uwear-about",
  apiKey: `${process.env.NEXT_PUBLIC_MICRO_CMS_UWEAR_ABOUT_API_KEY}`,
});

export type TAbout = {
  contents: TAboutContent[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type TAboutContent = {
  id: string;
  title: string;
  description: string;
  content: string;
  image: {
    url: string;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
