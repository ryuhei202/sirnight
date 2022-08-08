export type TValidationPaymentResponse = {
  readonly errors: string[];
  readonly customerCardId: number | null;
};
