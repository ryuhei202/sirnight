import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { BaseForms } from "../../src/components/register/BaseForms";

const Register: NextPage = () => {
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
        className="h-full bg-clay sm:w-[500px] inset-0 text-themeGray"
      >
        <h2 className="text-3xl font-bold text-center py-12">会員情報登録</h2>
        <BaseForms />
      </div>
    </div>
  );
};
export default Register;
