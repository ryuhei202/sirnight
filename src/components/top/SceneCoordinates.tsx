import { useState } from "react";
import { Button } from "../baseParts/Button";
import { CoordinateCard } from "./CoordinateCard";

export const SceneCoordinates = () => {
  const [isOpenMore, setIsOpenMore] = useState(false);
  const handleClick = () => {
    setIsOpenMore((prevState) => !prevState);
  };
  return (
    <div className="h-fit" id="coordinates">
      <CoordinateCard
        number={1}
        imageFilePath="/images/coordinates/1.webp"
        title="彼女と野外イベントへ"
        mainText={
          <>
            アクティブに動きやすく、
            <br />
            明るく元気な印象を与えるカラーで。
          </>
        }
        subText="野外イベントのシーンに合わせて動きやすさを重視して、薄手のニットとチノパンのカジュアルコーデにしました。
        トップスに暖色カラーを取り入れて顔周りに色物を合わせることで明るく元気な印象に見えます。
        足元に白のスニーカーを合わせることでより明るさをプラスして、コーデに抜け感を出してくれます！"
      />
      <CoordinateCard
        number={2}
        imageFilePath="/images/coordinates/2.webp"
        title="同僚とオフィスで休憩"
        mainText={
          <>
            きちんと感とリラックス感の両方を感じられる
            <br />
            オフィスワークコーデ
          </>
        }
        subText="社内のお仕事シーンに合わせて、カーディガンを取り入れることで温度調整ができるキレイめカジュアルコーデにしました。
        カーディガンをハイゲージ素材にすることできちんとさも残しつつ、襟のないバンドカラーシャツでほどよいリラックスのある印象に見えます。
        トップスとボトムスの色にメリハリを出すことで、まとまりが出てお仕事シーンでもぴったりのコーデです！"
      />
      <CoordinateCard
        number={3}
        imageFilePath="/images/coordinates/3.webp"
        title="恋人と記念日ディナー"
        mainText={
          <>
            ジャケットとタートルニットで
            <br />
            いつもよりも大人な印象に。
          </>
        }
        subText="記念日ディナーで少し高級感のあるお店のシーンに合わせて、ジャケットを取り入れたきれいめコーデにしました。
        ジャケットを着ることできちんと感を出し、インナーにタートルニットを合わせることで大人っぽさを出しました。
        全体的に色のトーンを暗めにまとめることで落ち着いた印象に見えます。
        小物類は黒にして、足元を革靴で合わせることでより引き締まり上品さをプラスしてくれます。"
      />
      <CoordinateCard
        number={4}
        imageFilePath="/images/coordinates/4.webp"
        title="同僚と飲みに"
        mainText={
          <>
            気兼ねなく長時間でも
            <br />
            楽にいれるカジュアルコーデ
          </>
        }
        subText="飲みに行くシーンに合わせて、長時間座ってもラクに過ごせるカジュアルコーデにしました。
        シャツはボタンを留めて着るときちんとした印象になり、ボタンを外して着ることで窮屈感がなくリラックス感のあるカジュアルな印象に見えて飲み屋のシーンにも合います。
        足元はスニーカーでカジュアルさを出しています。"
      />
      <CoordinateCard
        number={5}
        imageFilePath="/images/coordinates/5.webp"
        title="家族と休日のショッピング"
        mainText={
          <>
            アースカラーとゆったりシルエットで
            <br />
            優しい印象のお父さんに。
          </>
        }
        subText="車でショッピングへ行くシーンに合わせて、動きやすさを意識したカジュアルコーデにしました。
        アースカラーのボーダー柄は、色のメリハリを抑え柄物でも柔らかく優しい印象に見えます。
        ゆったりとしたシルエットで動きやすさを取り入れて、暖かみのある素材のコーデュロイを選ぶことで季節感も出しました。
        足元はスニーカーで合わせることで運転中も快適に過ごせるコーデにしました。"
      />
      {isOpenMore ? (
        <>
          <div className="animate-fadeIn">
            <CoordinateCard
              number={6}
              imageFilePath="/images/coordinates/6.webp"
              title="彼女とショッピングへ"
              mainText={
                <>
                  温かみを感じる素材感とダークカラーで
                  <br />
                  落ち着いた優しい彼氏に。
                </>
              }
              subText="彼女とのお出かけのシーンに合うように、ショッピングやカフェなど幅広いシーンに馴染むカジュアルコーデにしました。
              ミドルゲージのニットで温かみの素材を合わせることで、季節感を柔らかく優しい印象に見えます。
              ブラウンや黒などのダークトーンに合わせることで、落ち着いた雰囲気に見えるコーデにしました。"
            />
            <CoordinateCard
              number={7}
              imageFilePath="/images/coordinates/7.webp"
              title="お客様と商談"
              mainText={
                <>
                  全体をダークにキッチリ感をだしつつ、
                  <br />
                  顔周りは明るく好印象に。
                </>
              }
              subText="商談のシーンに合わせて、会社の信頼にも関わる大事な場面なので、きちんと感のあるきれいめなコーデにしました。
              ボトムスはブラックを合わせることで引き締まり、きちんと感を出しました。ジャケットは落ち着いた雰囲気に見えるグレーで合わせることで誠実な印象に見えます。
              インナーに明るい色を合わせることで顔周りが華やかに見えて、表情がよく見えるコーデにしました。"
            />
            <CoordinateCard
              number={8}
              imageFilePath="/images/coordinates/8.webp"
              title="婚活でのお見合いに"
              mainText={
                <>
                  お見合いで好印象を与えるきっちりしつつも、
                  <br />
                  清潔感がある印象に。
                </>
              }
              subText="婚活シーンで合うように、初対面の人への第一印象を大切にしたきれいめコーデにしました。
              スーツよりは少しカジュアルダウンさせたジャケパンコーデで親しみやすさを出しました。
              黒よりも柔らかい印象に見えるネイビーやブルーをジャケットやネクタイに取り入れることで清涼感があり、誠実な印象に見えます。
              小物類は黒で統一させることで引き締まり、まとまりのあるコーデにしました。"
            />
            <CoordinateCard
              number={9}
              imageFilePath="/images/coordinates/9.webp"
              title="友人と国内一泊旅行"
              mainText={
                <>
                  楽しい旅行の気分に合わせた
                  <br />
                  明るく爽やかなカラーリングで。
                </>
              }
              subText="旅行シーンに合うように、運転などの移動時間も快適に過ごしていただきやすいキレイめカジュアルコーデにしました。
              少し遠出で楽しい気分に合わせて、グリーンやブルーなどの色物を取り入れることで明るく、爽やかな印象に見えます。
              カットソーだけではラフすぎるので、シャツを合わせることできちんと感もプラスされることで、幅広い旅行先に合うコーデにしました。"
            />
            <CoordinateCard
              number={10}
              imageFilePath="/images/coordinates/10.webp"
              title="家族で公園におでかけ"
              mainText={
                <>
                  色味があるトップスで
                  <br />
                  子供に負けない元気な印象に。
                </>
              }
              subText="公園でのアクティブなシーンに合うように、レジャーシートを広げてのんびり過ごしたりアクティブでも動きやすいカジュアルなコーデにしました。
              色物を使うことで、表情を明るく見せることができるので、元気な印象に見えます。
              上下ともにゆったりとしたシルエットにすることで、程よいラフ感が出て、動きやすく身軽な雰囲気に見えるコーデにしました。"
            />
          </div>
        </>
      ) : (
        <div className="relative">
          <CoordinateCard
            number={6}
            imageFilePath="/images/coordinates/6.webp"
            title="彼女とショッピングへ"
            mainText={
              <>
                温かみを感じる素材感とダークカラーで
                <br />
                落ち着いた優しい彼氏に。
              </>
            }
            subText="彼女とのお出かけのシーンに合うように、ショッピングやカフェなど幅広いシーンに馴染むカジュアルコーデにしました。
              ミドルゲージのニットで温かみの素材を合わせることで、季節感を柔らかく優しい印象に見えます。
              ブラウンや黒などのダークトーンに合わせることで、落ち着いた雰囲気に見えるコーデにしました。"
            isBlur
          />
          <div className="absolute bottom-0 left-1/2 w-2/3 sm:w-1/2 translate-x-[-50%] translate-y-[50%]">
            <Button
              onClick={handleClick}
              weight="semibold"
              className="text-xs sm:text-sm sm:px-5 py-5"
            >
              コーデをもっと見る
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
