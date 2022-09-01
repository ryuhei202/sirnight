import { NextSeo } from "next-seo";
import Head from "next/head";
import { useEffect, useState } from "react";
import { BaseForms } from "../../src/components/register/BaseForms";
import { LoginForms } from "../../src/components/register/LoginForms";
import { PaymentForms } from "../../src/components/register/PaymentForms";
import { RegisterConfirm } from "../../src/components/register/RegisterConfirm";
import Thanks from "../../src/components/register/thanks";
import { getRegisterHandler } from "../../src/hooks/register/getRegisterHandler";
import {
  findPlanByName,
  LIGHT_PLAN,
  PREMIUM_PLAN,
  STANDARD_PLAN,
} from "../../src/models/plan/Plan";
import { TBaseRegisterData } from "../../src/models/register/TBaseRegisterData";
import { TLoginRegisterData } from "../../src/models/register/TLoginRegisterData";
import { TPaymentRegisterData } from "../../src/models/register/TPaymentRegisterData";

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { planName: LIGHT_PLAN.enName } },
      { params: { planName: STANDARD_PLAN.enName } },
      { params: { planName: PREMIUM_PLAN.enName } },
    ],
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { planName: "light" | "standard" | "premium" };
}) => {
  const planId = findPlanByName(params.planName).id;
  return { props: { planId } };
};

const Register = ({ planId }: { planId: 11 | 12 | 13 }) => {
  const [step, setStep] =
    useState<"base" | "login" | "payment" | "confirm" | "thanks">("base");
  const [baseData, setBaseData] = useState<TBaseRegisterData>();
  const [loginData, setLoginData] = useState<TLoginRegisterData>();
  const [paymentData, setPaymentData] = useState<TPaymentRegisterData>();

  useEffect(() => {
    Ts.loadFont();
    window.scrollTo(0, 0);
  }, [step]);

  const {
    handleSubmitBase,
    handleSubmitLogin,
    handleSubmitPayment,
    handleBack,
  } = getRegisterHandler({
    step,
    setStep,
    setBaseData,
    setLoginData,
    setPaymentData,
  });

  let forms;
  switch (step) {
    case "base": {
      forms = <BaseForms onSubmit={handleSubmitBase} />;
      break;
    }
    case "login": {
      forms = <LoginForms onSubmit={handleSubmitLogin} onBack={handleBack} />;
      break;
    }
    case "payment": {
      if (!loginData) {
        forms = <p>Loading...</p>;
        return;
      }
      forms = (
        <PaymentForms
          memberId={loginData.memberId}
          planId={planId}
          onSubmit={handleSubmitPayment}
          onBack={handleBack}
        />
      );
      break;
    }
    case "confirm": {
      if (!(baseData && loginData && paymentData)) {
        forms = <p>Loading...</p>;
        return;
      }
      forms = (
        <RegisterConfirm
          memberId={loginData.memberId}
          planId={planId}
          firstName={baseData.firstName}
          lastName={baseData.lastName}
          firstNameKana={baseData.firstNameKana}
          lastNameKana={baseData.lastNameKana}
          birthDay={baseData.birthDay}
          height={baseData.height}
          weight={baseData.weight}
          prefecture={baseData.prefecture}
          email={loginData.email}
          maskedCardNumber={paymentData.maskedCardNumber}
          serialCode={paymentData.serialCode}
          customerCardId={paymentData.customerCardId}
          discount={paymentData.discount}
          onBack={handleBack}
        />
      );
      break;
    }
    case "thanks": {
      if (!loginData) {
        forms = <p>Loading...</p>;
        return;
      }
      <Thanks memberId={loginData.memberId} />;
      break;
    }
  }

  return (
    <div>
      <NextSeo title="会員登録" />
      <Head>
        <script
          type="text/javascript"
          src={`${process.env.NEXT_PUBLIC_PAYGENT_URL}/js/PaygentToken.js`}
          async
        />
        <link rel="icon" href="/favicon/favicon_head.png" />
      </Head>
      <div
        id="container"
        className="h-full min-h-screen inset-0 text-themeGray"
      >
        <h2 className="text-3xl font-bold text-center py-12">会員情報登録</h2>
        {forms}
      </div>
    </div>
  );
};
export default Register;
