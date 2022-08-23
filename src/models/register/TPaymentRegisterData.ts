import { TDiscount } from "./TDiscount";

export type TPaymentRegisterData = {
  readonly customerCardId: number;
  readonly serialCode?: string;
  readonly maskedCardNumber: string;
  readonly discount?: TDiscount;
};
