import { useState } from "react";
import { TCoordinate } from "../../lib/microCMS/uwearClient";
import { Button } from "../baseParts/Button";
import { CoordinateCard } from "./CoordinateCard";
type TProps = {
  coordinatesData: TCoordinate;
};
export const SceneCoordinates = ({ coordinatesData }: TProps) => {
  const [isOpenMore, setIsOpenMore] = useState(false);
  const handleClick = () => {
    setIsOpenMore((prevState) => !prevState);
  };
  return coordinatesData.contents.map((content, i) => {
    return (
      <CoordinateCard
        key={content.id}
        imageFilePath={content.imageUrl.url}
        title={content.title}
        coordinateNumber={`コーデ#0${i + 1}`}
        mainText={content.mainText}
        subText={content.subText}
      />
    );
  });
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
        subText="イベントのシーンに合わせて動きやすさを重視して、Tシャツに少しゆとりのあるシャツを羽織にし、チノパンツを合わせたカジュアルコーデにしました。
        トップスに暖色カラーを取り入れて顔周りに色物を合わせることで明るく元気な印象に見えます。
        足元に白のスニーカーを合わせることでより明るさをプラスして、コーデに抜け感を出してくれます！"
      />
      <CoordinateCard
        imageFilePath="/images/coordinates/2.webp"
        title="友人と国内一泊旅行"
        coordinateNumber="コーデ#02"
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
      <CoordinateCard
        imageFilePath="/images/coordinates/3.webp"
        title="彼女とショッピングへ"
        coordinateNumber="コーデ#3"
        mainText={
          <>
            柔らかいカラーで
            <br />
            デートにぴったりな優しい彼氏に
          </>
        }
        subText="ショッピングへ行くシーンに合わせて、移動中の動きやすさを意識したきれいめカジュアルなコーデにしました。
        ゆとりのあるシルエットのボトムスで窮屈に感じず過ごしやすいコーデにしました。スモーキーなピンクのシャツは色の彩度を抑えているので柔らかく優しい印象になります。
        恋人とのお出かけなので、オープンカラーで首元をすっきり見せてスタイルよく見えるようにしました。足元は白のスニーカーで合わせることで沢山移動しても疲れないコーデにしています。"
      />
      <CoordinateCard
        imageFilePath="/images/coordinates/4.webp"
        title="お客様と商談"
        coordinateNumber="コーデ#04"
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
      {isOpenMore ? (
        <>
          <div className="animate-fadeIn">
            <CoordinateCard
              imageFilePath="/images/coordinates/5.webp"
              title="彼女とお休みにカフェへ"
              coordinateNumber="コーデ#05"
              mainText={
                <>
                  リラックス感のあるブルゾンで
                  <br />
                  ラフだけど落ち着きのあるコーデ
                </>
              }
              subText="カフェへ行くシーンに合わせて、リラックス感のあるカジュアルなコーデにしました。
              おしゃれな雰囲気のカフェには、アースカラーを中心に落ち着いた色でまとめて、シンプルなTシャツにブルゾンを合わせてアクセントを効かせたコーデにしました。
              靴はブラックにすることで、リラックス感のあるコーデでも全体の色味が締って見えます。"
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
              title="同僚とオフィスで打ち合わせ"
              coordinateNumber="コーデ#07"
              mainText={
                <>
                  きちんと感とリラックス感の両方を感じられる
                  <br />
                  オフィスワークコーデ
                </>
              }
              subText="仕事で同僚と会議をするシーンに合わせて、ジャケットを使ったビジネスカジュアルコーデにしました。
              襟のないトップスで程よくカジュアルさを取り入れています。ネイビーのジャケットの寒色系とトップスのホワイトで顔回りを明るくした清潔感のある爽やかなコーデにしました。
              ボトムスはベージュで明るい色合いなので、ブラックの靴を合わせるとコーデの色合が締りきちんと感のあるスタイルに見えます。"
            />
            <CoordinateCard
              imageFilePath="/images/coordinates/8.webp"
              title="婚活でのお見合いに"
              coordinateNumber="コーデ#08"
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
              imageFilePath="/images/coordinates/9.webp"
              title="家族で公園におでかけ"
              coordinateNumber="コーデ#09"
              mainText={
                <>
                  落ち着きのある色使いのコーデで、
                  <br />
                  子供とのお出かけ
                </>
              }
              subText="家族と公園へ遊びに行くシーンに合わせて、動きやすいカジュアルなコーデにしました。
              サマーニットは生地がさらりとしており肌離れが良く、ボトムスにはショートパンツを合わせると涼しく着て頂けるので子どもと一緒に遊ぶシーンにおすすめです。
              トップスは、カラーのトーンが暗めで落ち着いた印象に見える濃いブルーを使って、安心感のあるお父さんコーデにしました。足元はスニーカーを合わせて沢山動き回れるようにしています。"
            />
          </div>
        </>
      ) : (
        <div className="relative">
          <CoordinateCard
            imageFilePath="/images/coordinates/5.webp"
            title="彼女とお休みにカフェへ"
            coordinateNumber="コーデ#05"
            mainText={
              <>
                リラックス感のあるブルゾンで
                <br />
                ラフだけど落ち着きのあるコーデ
              </>
            }
            subText="カフェへ行くシーンに合わせて、リラックス感のあるカジュアルなコーデにしました。
            おしゃれな雰囲気のカフェには、アースカラーを中心に落ち着いた色でまとめて、シンプルなTシャツにブルゾンを合わせてアクセントを効かせたコーデにしました。
            靴はブラックにすることで、リラックス感のあるコーデでも全体の色味が締って見えます。"
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
