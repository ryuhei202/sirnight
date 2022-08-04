import { TBaseRegisterData } from "../../models/register/TBaseRegisterData";
import { TLoginRegisterData } from "../../models/register/TLoginRegisterData";

type TArgs = {
  readonly step: "base" | "login" | "payment";
  readonly setStep: React.Dispatch<
    React.SetStateAction<"base" | "login" | "payment">
  >;
  readonly setBaseData: React.Dispatch<
    React.SetStateAction<TBaseRegisterData | undefined>
  >;
  readonly setLoginData: React.Dispatch<
    React.SetStateAction<TLoginRegisterData | undefined>
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
  readonly handleSubmitLogin: ({ email, password }: TLoginRegisterData) => void;
  readonly handleBack: () => void;
};

export const useRegisterIndexHandler = ({
  step,
  setStep,
  setBaseData,
  setLoginData,
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

  const handleSubmitLogin = ({ email, password }: TLoginRegisterData) => {
    setLoginData({ email, password });
    setStep("payment");
  };

  const handleBack = () => {
    switch (step) {
      case "login": {
        setBaseData(undefined);
        setStep("base");
      }
    }
  };

  return { handleSubmitBase, handleSubmitLogin, handleBack };
};
