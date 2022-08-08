import { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../src/components/baseParts/Layout";
import { Header } from "../src/components/plan/Header";
import { FooterMenu } from "../src/components/top/FooterMenu";

const Company: NextPage = () => {
  return (
    <div>
      <Head>
        <title>会社概要 | UWear公式サイト</title>
      </Head>
      <div
        id="container"
        className="h-full min-h-screen bg-clay sm:w-[500px] inset-0 text-themeGray"
      >
        <Header lists={[{ name: "会社概要" }]} />
        <Layout title="会社概要" className="px-12">
          <div>
            <h3>会社名</h3>
            <p>株式会社キーザンキーザン</p>
          </div>
          <div>
            <h3>代表取締役</h3>
            <p>井上 大輔</p>
          </div>
          <div>
            <h3>取締役</h3>
            <p>大堂 立</p>
          </div>
          <div>
            <h3>住所</h3>
            <p>
              〒550-0012 大阪府大阪市西区立売堀1丁目4-12 立売堀スクエアビル7F
            </p>
          </div>
          <div>
            <h3>URL</h3>
            <p>kiizan-kiizan.co.jp</p>
          </div>
          <div>
            <h3>連絡先</h3>
            <p>06-6533-2030</p>
          </div>
          <div>
            <h3>設立</h3>
            <p>平成19年6月1日</p>
          </div>
          <div>
            <h3>資本金</h3>
            <p>83,500,000円</p>
          </div>
        </Layout>
        <FooterMenu />
      </div>
    </div>
  );
};
export default Company;
