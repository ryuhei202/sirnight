import { AxiosResponse } from "axios";
import { UseMutateFunction } from "react-query";
import { usePostRequest } from "../usePostRequest";

type TValidationsBase = {
  readonly mutate: UseMutateFunction<
    AxiosResponse,
    unknown,
    TValidationsBaseParams,
    unknown
  >;
  readonly isLoading: boolean;
};

export type TValidationsBaseParams = {
  readonly height: number;
  readonly weight: number;
  readonly prefecture: string;
};

export const useValidationsBase = (): TValidationsBase => {
  const { mutate, isLoading } =
    usePostRequest<TValidationsBaseParams>("validations/base");

  return { mutate, isLoading };
};
