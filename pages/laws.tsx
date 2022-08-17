import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { Layout } from "../src/components/baseParts/Layout";
import { Header } from "../src/components/plan/Header";
import { FooterMenu } from "../src/components/top/FooterMenu";

const Laws: NextPage = () => {
  return (
    <div>
      <NextSeo title="特定商取引法・古物営業法に基づく表示" />
      <div
        id="container"
        className="h-full min-h-screen inset-0 text-themeGray"
      >
        <Header lists={[{ name: "特定商取引法・古物営業法に基づく表示" }]} />
        <Layout title="特定商取引法・古物営業法に基づく表示">
          <div>
            <h3>販売業者</h3>
            <p>株式会社キーザンキーザン</p>
          </div>
          <div>
            <h3>店名</h3>
            <p>UWear</p>
          </div>
          <div>
            <h3>運営責任者</h3>
            <p>井上 大輔</p>
          </div>
          <div>
            <h3>所在地</h3>
            <p>
              〒550-0012 大阪府大阪市西区立売堀1丁目4-12 立売堀スクエアビル7F
            </p>
          </div>
          <div>
            <h3>URL</h3>
            <p>kiizan-kiizan.co.jp</p>
          </div>
          <div>
            <h3>メールアドレス</h3>
            <p>info@leeap.jp</p>
          </div>
          <div>
            <h3>連絡先</h3>
            <p>06-6533-2030</p>
          </div>
          <div>
            <h3>営業許可免許</h3>
            <p>大阪府公安委員会 古物商許可番号 第621130120218号</p>
          </div>
          <div>
            <h3>販売価格</h3>
            <p>
              定額レンタル
              <br />
              各プラン毎の表示価格による
              <br />
              商品ごとに表示された税込み価格に基づく
            </p>
          </div>
          <div>
            <h3>商品代金以外の必要料金</h3>
            <p>
              商品を紛失・破損などをされた際の違約金
              <br />
              弊社指定の返送用伝票以外を用いて返送する場合の送料
            </p>
          </div>
          <div>
            <h3>支払い方法</h3>
            <p>クレジットカード</p>
          </div>
          <div>
            <h3>支払期限</h3>
            <p>クレジットカード</p>
          </div>
          <div>
            <h3>支払い方法</h3>
            <p>
              レンタル商品：サービス申し込み時および毎月更新時に課金対象となり、クレジットカード会社が定める引き落とし日に支払いとなります。
              <br />
              販売商品：商品購入ボタンを押した時点で課金対象となり、クレジットカード会社が定める引き落とし日に支払いとなります。
            </p>
          </div>

          <div>
            <h3>引渡し時期</h3>
            <p>
              決済完了後からスタイリストの質問事項を回答いただいてから1週間程度のお渡しとなります。
            </p>
          </div>
          <div>
            <h3>返品/交換について</h3>
            <p>
              レンタルはサービスの性質上、申し込み後の取り消しは受け付けないものとします。
              <br />
              購入済み商品の返品・交換はお受付けできません。
            </p>
          </div>
          <div>
            <h3>解約条件</h3>
            <p>
              ご契約期間中はいつでも解約の申し込み可能できます。
              <br />
              解約はすべてのレンタル商品を弊社まで返却し、弊社が返却を確認した時点で成立します。
              <br />
              請求途中の解約による返金はお受付できません。
            </p>
          </div>
        </Layout>
        <FooterMenu />
      </div>
    </div>
  );
};
export default Laws;
