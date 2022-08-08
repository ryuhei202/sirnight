import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { NewsContent } from "../../src/components/news/NewsContent";
import { Header } from "../../src/components/plan/Header";
import { FooterMenu } from "../../src/components/top/FooterMenu";

type TProps = {
  readonly id: string;
  readonly title: string;
  readonly content: string;
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: { params: TProps }) => {
  const { id } = params;
  return { props: { id } };
};

const NewsDetail: NextPage<TProps> = ({ id }: TProps) => {
  const texts = `<div>このたびleeapは、パートナー皆さまのお出かけシーンに合わせたコーデがもっと良くなるようにコーデレビュー機能を改善しました。<br><br></div><h1><strong>なぜコーデレビュー機能を変更したのか？</strong></h1><div><br></div><div>今まではアイテムごとに星5段階で評価を選択できるレビュー方法を採用してましたが、仮にアイテムが星3のレビューをいただいたとき「そのアイテムは良かったのだろうか？パートナーは今回お届けのコーデで、満足いただけたのだろうか？」と、スタイリストが次のコーデに活かすときに迷うことがありました。<br><br>そこで今回コーデレビュー機能を変更しました。<br><br><action-text-attachment sgid="BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vbGVlYXAvQWN0aXZlU3RvcmFnZTo6QmxvYi8xP2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIg9hdHRhY2hhYmxlBjsAVEkiD2V4cGlyZXNfYXQGOwBUMA==--b90ac7e5cdafca0afd5b6dfdc413985765f651de" content-type="image/png" url="https://leeap.jp/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--10adef2dc9ca909deed43db923d437823653298e/Screenshot_20220506-124814.png" filename="Screenshot_20220506-124814.png" filesize="354554" width="1070" height="2001" presentation="gallery"></action-text-attachment><br><br><br>今回のアップデートでは、まずお使いのシーンでのコーデ満足度をお伺いし、次にコーデで気になるところがあった場合に限り、詳細をレビューできるように変更しています。</div><div><br></div><div>また、パートナーから苦手なポイントを言葉にしにくいという声をいただき、点数形式ではなく選択形式に変更しました。<br><br></div><div><br></div><div><action-text-attachment sgid="BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vbGVlYXAvQWN0aXZlU3RvcmFnZTo6QmxvYi8yP2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIg9hdHRhY2hhYmxlBjsAVEkiD2V4cGlyZXNfYXQGOwBUMA==--d0d383735ad5c5e9a7f10fa9f509a58a1a60916d" content-type="image/png" url="https://leeap.jp/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6ca337701e0b33256a934120f92a599d1b25ee65/Screenshot_20220506-124841.png" filename="Screenshot_20220506-124841.png" filesize="220840" width="1069" height="2003" presentation="gallery"></action-text-attachment><br><br><br>最後の設問では頂いたレビューをもとにスタイリストがLINEでお話をお伺いしたほうが良いかを選択ができるようにしました。<br><br>今回のレビューは「スタイリストが内容を理解するだけで良いのか？具体的に次からのコーデについて活かすためにLINEでお話ができるのか？」をお選びいただけます。<br><br><br><action-text-attachment sgid="BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vbGVlYXAvQWN0aXZlU3RvcmFnZTo6QmxvYi8zP2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIg9hdHRhY2hhYmxlBjsAVEkiD2V4cGlyZXNfYXQGOwBUMA==--25582cb2500d413aa41d3ad281a2fb4ea4887a31" content-type="image/png" url="https://leeap.jp/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6f2996d56ea9a70959d971404848be6b7b6f56ed/Screenshot_20220506-124756.png" filename="Screenshot_20220506-124756.png" filesize="82065" width="1080" height="627" presentation="gallery"></action-text-attachment><br><br><br></div><h1><strong>さいごに</strong></h1><div><br></div><div>今後もleeapは、パートナーの皆様にとってより良い改善を進めていきたいと思います。<br>leeapを利用する上で、何か使いにくい点や思うところなどございましたら、担当スタイリスト、または問い合わせフォームまでお気軽にご意見ください。<br><br>これからもっとleeapを良くしていきますので、今後ともよろしくお願いします。</div>`;
  return (
    <div className="h-full bg-clay sm:w-[500px]">
      <Head>
        <title>お知らせ | UWear公式サイト</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Lora"
        />
      </Head>
      <div
        id="container"
        className="h-full min-h-screen bg-clay sm:w-[500px] inset-0 text-themeGray"
      >
        <Header lists={[{ name: "お知らせ", path: "/news" }]} />
        <div className="px-12">
          <div className="py-12 border-b-[1px] border-[#D8D8D2]">
            <p className="text-xs">2022.05.15</p>
            <h2 className="pt-2 text-xl font-bold">{`コーデレビュー機能をアップデートしました。`}</h2>
          </div>
          <div className="pt-12 text-sm">
            <div className="text-right pb-12">
              <p>2022年5月15日</p>
              <p>株式会社kizankiizan</p>
            </div>
            <NewsContent content={texts} />
            <button
              className={`relative inline-block p-3 w-full font-bold text-base mt-12 mb-48 rounded-full bg-clay border-[1px] border-[#D8D8D2]`}
            >
              <Link href="/news">
                <a>お知らせ一覧に戻る</a>
              </Link>
            </button>
          </div>
        </div>
        <FooterMenu />
      </div>
    </div>
  );
};
export default NewsDetail;
