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
        imageFilePath="/images/coordinates/1.webp"
        title="彼女とライブイベントへ"
        coordinateNumber="コーデ#01"
        mainText={
          <>
            アクティブに動きやすく、
            <br />
            明るく元気な印象を与えるカラーで
          </>
        }
        subText="イベントのシーンに合わせて動きやすさを重視して、シャリ感のあるシャツにTシャツとチノパンを合わせたカジュアルコーデにしました。
        トップスに暖色カラーを取り入れて顔周りに色物を合わせることで明るく元気な印象に見えます。
        足元に白のスニーカーを合わせることでより明るさをプラスして、コーデに抜け感を出してくれます！"
      />
      <CoordinateCard
        imageFilePath="/images/coordinates/2.webp"
        title="同僚とオフィスで打ち合わせ"
        coordinateNumber="コーデ#02"
        mainText={
          <>
            きちんと感とリラックス感の両方を感じられる
            <br />
            オフィスワークコーデ
          </>
        }
        subText="仕事で同僚と会議をするシーンに合わせて、ジャケットを使ったビジネスカジュアルコーデにしました。
        襟のないトップスで程よくカジュアルさを取り入れています。ネイビーのジャケットの寒色系とトップスのホワイトで顔回りを明るくした清潔感のある爽やかなコーデにしました。
        ボトムスにはベージュで明るい色合いなので、靴にはブラックを合わせるとコーデの色合が締りきちんと感のあるスタイルにしています。"
      />
      <CoordinateCard
        imageFilePath="/images/coordinates/3.webp"
        title="婚活でのお見合いに"
        coordinateNumber="コーデ#03"
        mainText={
          <>
            お見合いで好印象を与える、
            <br />
            きっちりしつつも清潔感がある印象に
          </>
        }
        subText="婚活シーンのお見合いに合うように、初対面の人への第一印象を大切にしたきれいめコーデにしました。
              スーツよりは少しカジュアルダウンさせたジャケパンコーデで親しみやすさを出しました。
              黒よりも柔らかい印象に見えるネイビーやブルーをジャケットやネクタイに取り入れることで清涼感があり、誠実な印象に見えます。
              小物類は黒で統一させることで引き締まり、まとまりのあるコーデにしました。"
      />
      <CoordinateCard
        imageFilePath="/images/coordinates/4.webp"
        title="友人と国内一泊旅行"
        coordinateNumber="コーデ#04"
        mainText={
          <>
            楽しい旅行の気分に合わせた
            <br />
            明るく爽やかなカラーリングで
          </>
        }
        subText="旅行シーンに合うように、運転などの移動時間も快適に過ごしやすいキレイめカジュアルコーデにしました。
              少し遠出で楽しい気分に合わせて、グリーンやブルーなどの色物を取り入れることで明るく、爽やかな印象に見えます。
              カットソーだけではラフすぎるので、シャツを合わせることできちんと感をプラスした、幅広い旅行先に合うコーデにしました。"
      />
      {isOpenMore ? (
        <>
          <div className="animate-fadeIn">
            <CoordinateCard
              imageFilePath="/images/coordinates/5.webp"
              title="家族で公園におでかけ"
              coordinateNumber="コーデ#05"
              mainText={
                <>
                  色味があるトップスで
                  <br />
                  子供に負けない元気な印象に
                </>
              }
              subText="家族と公園へ遊びに行くシーンに合わせて、動きやすいカジュアルなコーデにしました。
              サマーニットは生地がさらりとしており肌離れが良く、ボトムスにはショートパンツを合わせて涼しく着て頂けるので子どもと一緒に遊ぶシーンでもおすすめです。
              はっきりとした濃い目のブルーとブラックで上下でメリハリをつけることで、ブルーの色が際立つので明るい印象になります。足元はスニーカーを合わせて沢山動き回れるスタイルにしました。"
            />
            <CoordinateCard
              imageFilePath="/images/coordinates/6.webp"
              title="同僚と飲みに"
              coordinateNumber="コーデ#06"
              mainText={
                <>
                  気兼ねなく長時間でも
                  <br />
                  楽にいられるカジュアルコーデ
                </>
              }
              subText="飲みに行くシーンに合わせて、居酒屋で長時間座ってもラクに過ごせるカジュアルコーデにしました。
              シャツはボタンを留めて着るときちんとした印象になり、ボタンを外して着ることで窮屈感がなくリラックス感のあるカジュアルな印象に見えて飲み屋のシーンにも合います。
              足元はスニーカーでカジュアルさを出しています。"
            />
            <CoordinateCard
              imageFilePath="/images/coordinates/7.webp"
              title="お客様と商談"
              coordinateNumber="コーデ#07"
              mainText={
                <>
                  全体をダークにキッチリ感をだしつつ、
                  <br />
                  顔周りは明るく好印象に
                </>
              }
              subText="商談のシーンに合わせて、会社の信頼にも関わる大事な場面なので、きちんと感のあるきれいめなコーデにしました。
              ボトムスはブラックを合わせることで引き締まり、きちんと感を出しました。ジャケットは落ち着いた雰囲気に見えるグレーで合わせることで誠実な印象に見えます。
              インナーに明るい色を合わせることで顔周りが華やかに見えて、表情がよく見えるコーデにしました。"
            />
            <CoordinateCard
              imageFilePath="/images/coordinates/8.webp"
              title="彼女とお休みにカフェへ"
              coordinateNumber="コーデ#08"
              mainText={
                <>
                  ジャケットとタートルニットで
                  <br />
                  いつもよりも大人な印象に
                </>
              }
              subText="カフェへ食事へ行くシーンに合わせて、リラックス感のあるカジュアルなコーデにしました。
              おしゃれな雰囲気のカフェには、アースカラーを中心に落ち着いた色でまとめて、シンプルなTシャツにブルゾンを合わせてアクセントを効かせたコーデにしました。
              靴はブラックにすることで、リラックス感のあるコーデでも全体の色味が締って見えます。"
            />
            <CoordinateCard
              imageFilePath="/images/coordinates/9.webp"
              title="彼女とショッピングへ"
              coordinateNumber="コーデ#9"
              mainText={
                <>
                  温かみを感じる素材感とダークカラーで
                  <br />
                  落ち着いた優しい彼氏に
                </>
              }
              subText="彼女とのお出かけのシーンに合うように、ショッピングやカフェなど幅広いシーンに馴染むカジュアルコーデにしました。
              ミドルゲージのニットで温かみの素材を合わせることで、季節感が出て柔らかく優しい印象に見えます。
              ブラウンや黒などのダークトーンに合わせることで、落ち着いた雰囲気に見えるコーデにしました。"
            />
          </div>
        </>
      ) : (
        <div className="relative">
          <CoordinateCard
            imageFilePath="/images/coordinates/5.webp"
            title="家族で公園におでかけ"
            coordinateNumber="コーデ#05"
            mainText={
              <>
                色味があるトップスで
                <br />
                子供に負けない元気な印象に
              </>
            }
            subText="公園のシーンに合うように、レジャーシートを広げてのんびり過ごしたり、アクティブにも遊べる動きやすいカジュアルなコーデにしました。
              色物を使うことで、表情を明るく見せることができるので、元気な印象に見えます。
              上下ともにゆったりとしたシルエットにすることで、程よいラフ感が出て、動きやすく身軽な雰囲気に見えるコーデにしました。"
            isBlur
          />
          <div className="absolute bottom-0 left-1/2 w-2/3 sm:w-1/2 translate-x-[-50%] translate-y-[50%]">
            <Button
              onClick={handleClick}
              weight="medium"
              className="text-[3.5vw] sm:text-sm sm:px-5 py-5"
            >
              コーデをもっと見る
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
