import { AxiosResponse } from "axios";
import { UseMutateFunction } from "react-query";
import { usePostRequest } from "../usePostRequest";

type TMemberCreate = {
  readonly mutate: UseMutateFunction<
    void | AxiosResponse,
    unknown,
    TMembersCreateParams,
    unknown
  >;
  readonly isLoading: boolean;
};

export type TMembersCreateParams = {
  readonly memberId: number;
  readonly planId?: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly firstNameKana: string;
  readonly lastNameKana: string;
  readonly birthDay: string;
  readonly height: number;
  readonly weight: number;
  readonly prefecture: string;
  readonly customerCardId: number;
  readonly serialCode?: string;
};

export const useMembersCreate = (): TMemberCreate => {
  const { mutate, isLoading } = usePostRequest<TMembersCreateParams>("member");

  return { mutate, isLoading };
};
