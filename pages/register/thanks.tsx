import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LinkButton } from "../../src/components/baseParts/LinkButton";

const Thanks: NextPage = () => {
  const [memberId, setMemberId] = useState<number>();
  const { memberId: memberIdQuery } = useRouter().query;
  useEffect(() => {
    if (Array.isArray(memberIdQuery)) {
      setMemberId(undefined);
    } else {
      setMemberId(Number(memberIdQuery) ?? undefined);
    }
  }, [memberIdQuery]);
  return (
    <div>
      <NextSeo title="会員登録完了" />
      <Head>
        {/* もしもアフィリエイトコンバージョンタグ */}
        {memberId && (
          <script
            src={`https://r.moshimo.com/af/r/result.js?p_id=1063&pc_id=1537&m_v=${memberId}`}
            id="msmaf"
          ></script>
        )}
      </Head>
      <div
        id="container"
        className="h-full min-h-screen inset-0 text-themeGray"
      >
        <h2 className="text-3xl font-bold text-center py-12">会員登録完了</h2>
        <div className="px-6">
          <p className="text-sm">
            会員登録ありがとうございます！
            <br />
            メールを送付しましたので、ご確認をお願い致します。
          </p>
          <p className="mt-8 text-sm">
            UWearではスタイリストへの相談、料金プラン変更、返却など全てLINEから行います。
            <br />
            お手数ですが下記からご登録をお願い致します。
          </p>
          <div className="text-center">
            <LinkButton
              href={`${process.env.NEXT_PUBLIC_HOST_URL}/line_login/authorize?tp=Xu7KVD8d`}
              className="mt-12"
            >
              LINEでスタイリストを友達追加する
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Thanks;
