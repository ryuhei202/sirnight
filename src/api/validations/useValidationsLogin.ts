import { AxiosResponse } from "axios";
import { UseMutateFunction } from "react-query";
import { usePostRequest } from "../usePostRequest";

type TValidationsLogin = {
  readonly mutate: UseMutateFunction<
    void | AxiosResponse,
    unknown,
    TValidationsLoginParams,
    unknown
  >;
  readonly isLoading: boolean;
};

export type TValidationsLoginParams = {
  readonly email: string;
  readonly password: string;
};

export const useValidationsLogin = (): TValidationsLogin => {
  const { mutate, isLoading } =
    usePostRequest<TValidationsLoginParams>("validations/login");

  return { mutate, isLoading };
};
