import { createClient } from "microcms-js-sdk";

export const uwearClient = createClient({
  serviceDomain: "uwear",
  apiKey: `${process.env.NEXT_PUBLIC_MICRO_CMS_UWEAR_API_KEY}`,
});

export type TNews = {
  contents: TNewsContent[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type TNewsContent = {
  id: string;
  title: string;
  body: string;
  image?: {
    url: string;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type TCompany = {
  contents: TCompanyContent[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type TCompanyContent = {
  id: string;
  title: string;
  content: string;
};

export type TCoordinate = {
  contents: TCoordinateContent[];
};

export type TCoordinateContent = {
  id: string;
  imageUrl: {
    url: string;
  };
  title: string;
  mainText: string;
  subText: string;
};

// /companyのAPIに存在するpathをアプリケーション側で管理するための定数。
// pathを追加したい場合はここに追加してください。
export const COMPANY_PATHS = {
  TERM: "/term",
  COMPANY: "/company",
  PRIVACY: "/privacy",
  LAWS: "/laws",
} as const;

export type TCompanyPaths = (typeof COMPANY_PATHS)[keyof typeof COMPANY_PATHS];
