import { AxiosResponse } from "axios";
import { UseMutateFunction } from "react-query";
import { usePostRequest } from "../usePostRequest";

type TReviewCreate = {
  readonly mutate: UseMutateFunction<
    AxiosResponse,
    unknown,
    TMembersCreateParams,
    unknown
  >;
  readonly isLoading: boolean;
};

export type TMembersCreateParams = {
  readonly firstName: string;
  readonly lastName: string;
  readonly firstNameKana: string;
  readonly lastNameKana: string;
  readonly birthDay: Date;
  readonly height: number;
  readonly weight: number;
  readonly prefecture: string;
  readonly email: string;
  readonly password: string;
  readonly customerCardId: number;
  readonly serial_code?: string;
};

export const useMembersCreate = (): TReviewCreate => {
  const { mutate, isLoading } = usePostRequest<TMembersCreateParams>("member");

  return { mutate, isLoading };
};
