import { TDiscount } from "../../models/register/TDiscount";

export type TValidationPaymentResponse = {
  readonly errors: string[];
  readonly customerCardId: number | null;
  readonly discount: TDiscount | null;
};
