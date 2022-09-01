import { TBaseRegisterData } from "../../models/register/TBaseRegisterData";
import { TLoginRegisterData } from "../../models/register/TLoginRegisterData";
import { TPaymentRegisterData } from "../../models/register/TPaymentRegisterData";

type TArgs = {
  readonly step: "base" | "login" | "payment" | "confirm";
  readonly setStep: React.Dispatch<
    React.SetStateAction<"base" | "login" | "payment" | "confirm">
  >;
  readonly setBaseData: React.Dispatch<
    React.SetStateAction<TBaseRegisterData | undefined>
  >;
  readonly setLoginData: React.Dispatch<
    React.SetStateAction<TLoginRegisterData | undefined>
  >;
  readonly setPaymentData: React.Dispatch<
    React.SetStateAction<TPaymentRegisterData | undefined>
  >;
};

type TRegisterHandler = {
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
  readonly handleSubmitLogin: ({ email, memberId }: TLoginRegisterData) => void;
  readonly handleSubmitPayment: ({
    customerCardId,
    serialCode,
    maskedCardNumber,
    discount,
  }: TPaymentRegisterData) => void;
  readonly handleBack: () => void;
};

export const getRegisterHandler = ({
  step,
  setStep,
  setBaseData,
  setLoginData,
  setPaymentData,
}: TArgs): TRegisterHandler => {
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

  const handleSubmitLogin = ({ email, memberId }: TLoginRegisterData) => {
    setLoginData({ email, memberId });
    setStep("payment");
  };

  const handleSubmitPayment = ({
    customerCardId,
    serialCode,
    maskedCardNumber,
    discount,
  }: TPaymentRegisterData) => {
    setPaymentData({
      customerCardId,
      serialCode,
      maskedCardNumber,
      discount,
    });
    setStep("confirm");
  };

  const handleBack = () => {
    switch (step) {
      case "login": {
        setBaseData(undefined);
        setStep("base");
        break;
      }
      case "payment": {
        setLoginData(undefined);
        setStep("login");
        break;
      }
      case "confirm": {
        setPaymentData(undefined);
        setStep("payment");
        break;
      }
    }
  };

  return {
    handleSubmitBase,
    handleSubmitLogin,
    handleSubmitPayment,
    handleBack,
  };
};
