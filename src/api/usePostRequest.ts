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
        `${process.env.REACT_APP_HOST_URL}/${path}`,
        { ...params }
      )
  );

  return { mutate, mutateAsync, isLoading, isError, isSuccess };
};
