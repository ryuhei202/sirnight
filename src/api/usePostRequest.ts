import * as Sentry from "@sentry/react";
import { PreservedKeysCondition } from "axios-case-converter";
import { useMutation } from "react-query";
import { customAxios } from "./customAxios";

export const usePostRequest = <T>(
  path: string,
  preservedKeys?: string[] | PreservedKeysCondition
) => {
  const { mutate, mutateAsync, isLoading, isError, isSuccess } = useMutation(
    path,
    (params: T) =>
      customAxios(preservedKeys)
        .post(`${process.env.NEXT_PUBLIC_HOST_URL}/sirnight/${path}`, {
          ...params,
        })
        .catch((e) => {
          Sentry.captureException(e);
        })
  );

  return { mutate, mutateAsync, isLoading, isError, isSuccess };
};
