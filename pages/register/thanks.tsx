import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";

const Thanks: NextPage = () => {
  return (
    <div>
      <NextSeo title="会員登録完了" />
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
            <button
              className={`relative inline-block p-3 w-full font-medium text-base mt-12 rounded-full bg-themeGray text-slate-200 `}
            >
              <Link
                href={`${process.env.NEXT_PUBLIC_HOST_URL}/line_login/authorize?tp=Xu7KVD8d`}
              >
                <a>LINEでスタイリストを友達追加する</a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Thanks;
