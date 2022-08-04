import { TAX } from "./Tax";

export const PLAN = {
  LIGHT: {
    id: 11,
    name: "ライトプラン",
    price: 6800,
    priceTaxIn: 6800 + 6800 * TAX,
  },
  STANDARD: {
    id: 12,
    name: "スタンダードプラン",
    price: 9800,
    priceTaxIn: 9800 + 9800 * TAX,
  },
  PREMIUM: {
    id: 13,
    name: "プレミアムプラン",
    price: 14800,
    priceTaxIn: 14800 + 14800 * TAX,
  },
} as const;

export const findPlan = (
  planId: number
): { id: number; name: string; price: number; priceTaxIn: number } => {
  const plan = Object.values(PLAN).find((plan) => plan.id === planId);
  if (plan === undefined) {
    throw Error("存在しないプランです");
  }
  return plan;
};
