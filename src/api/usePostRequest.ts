import { customAxios } from "./customAxios";
import { PreservedKeysCondition } from "axios-case-converter";
import { useMutation } from "react-query";

export const usePostRequest = <T>(
  path: string,
  preservedKeys?: string[] | PreservedKeysCondition
) => {
  const { mutate, mutateAsync, isLoading, isError, isSuccess } = useMutation(
    path,
    (params: T) =>
      customAxios(preservedKeys).post(
        `${process.env.NEXT_PUBLIC_HOST_URL}/sirnight/${path}`,
        { ...params }
      )
  );

  return { mutate, mutateAsync, isLoading, isError, isSuccess };
};
