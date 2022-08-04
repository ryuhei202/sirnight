import { TBaseRegisterData } from "../../models/register/TBaseRegisterData";

type TArgs = {
  readonly setStep: React.Dispatch<
    React.SetStateAction<"base" | "login" | "payment">
  >;
  readonly setBaseData: React.Dispatch<
    React.SetStateAction<TBaseRegisterData | undefined>
  >;
};

type TRegisterIndexHandler = {
  readonly handleSubmitBase: ({
    firstName,
    lastName,
    firstNameKana,
    lastNameKana,
    birthDay,
    height,
    weight,
    prefecture,
  }: TBaseRegisterData) => void;
};

export const useRegisterIndexHandler = ({
  setStep,
  setBaseData,
}: TArgs): TRegisterIndexHandler => {
  const handleSubmitBase = ({
    firstName,
    lastName,
    firstNameKana,
    lastNameKana,
    birthDay,
    height,
    weight,
    prefecture,
  }: TBaseRegisterData) => {
    setBaseData({
      firstName,
      lastName,
      firstNameKana,
      lastNameKana,
      birthDay,
      height,
      weight,
      prefecture,
    });
    setStep("login");
  };

  return { handleSubmitBase };
};
