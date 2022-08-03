import { AxiosResponse } from "axios";
import { UseMutateFunction } from "react-query";
import { usePostRequest } from "../usePostRequest";

type TMemberCreate = {
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
  readonly serialCode?: string;
};

export const useMembersCreate = (): TMemberCreate => {
  const { mutate, isLoading } = usePostRequest<TMembersCreateParams>("member");

  return { mutate, isLoading };
};
