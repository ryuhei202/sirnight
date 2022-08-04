import { AxiosResponse } from "axios";
import { UseMutateFunction } from "react-query";
import { usePostRequest } from "../usePostRequest";

type TValidationsPayment = {
  readonly mutate: UseMutateFunction<
    AxiosResponse,
    unknown,
    TValidationsPaymentParams,
    unknown
  >;
  readonly isLoading: boolean;
};

export type TValidationsPaymentParams = {
  readonly cardToken: string;
  readonly memberId: number;
  readonly serialCode?: string;
};

export const useValidationsPayment = (): TValidationsPayment => {
  const { mutate, isLoading } = usePostRequest<TValidationsPaymentParams>(
    "validations/payment"
  );

  return { mutate, isLoading };
};
