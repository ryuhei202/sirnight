import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { BaseForms } from "../../src/components/register/BaseForms";
import { LoginForms } from "../../src/components/register/LoginForms";
import { PaymentForms } from "../../src/components/register/PaymentForms";
import { useRegisterIndexHandler } from "../../src/hooks/register/useRegisterIndexHandler";
import { TBaseRegisterData } from "../../src/models/register/TBaseRegisterData";

const Register: NextPage = () => {
  const [step, setStep] = useState<"base" | "login" | "payment">("base");
  const [baseData, setBaseData] = useState<TBaseRegisterData>();

  const { handleSubmitBase } = useRegisterIndexHandler({
    setStep,
    setBaseData,
  });
  let forms;
  switch (step) {
    case "base": {
      forms = <BaseForms onSubmit={handleSubmitBase} />;
      break;
    }
    case "login": {
      forms = <LoginForms />;
      break;
    }
    case "payment": {
      forms = <PaymentForms />;
      break;
    }
  }

  return (
    <div>
      <Head>
        <title>会員登録 | UWear公式サイト</title>
        <meta
          name="description"
          content="メンズファッションレンタルサービスUWear"
        />
        <link rel="icon" href="/favicon/favicon_head.png" />
      </Head>
      <div
        id="container"
        className="h-full min-h-screen bg-clay sm:w-[500px] inset-0 text-themeGray"
      >
        <h2 className="text-3xl font-bold text-center py-12">会員情報登録</h2>
        {forms}
      </div>
    </div>
  );
};
export default Register;
