import { QuestionAnswer } from "./QuestionAnswer";

export const Faq = () => {
  return (
    <div className="bg-clay py-28" id="faq">
      <p className="text-[6vw] sm:text-2xl text-center font-extrabold mb-14">
        よくあるご質問
      </p>
      <div className="border-b-2 border-solid border-[#D8D8D2]">
        <QuestionAnswer
          question="どんな洋服が届きますか？"
          answer={
            <>
              UWearはプロのデザイナー監修のもと、洋服づくりをしています。
              <br />
              お届けする洋服の多くがオリジナルブランドです。すべて利用シーンにあわせた自信のあるオリジナルアイテムをお届けしています。
            </>
          }
        />
        <QuestionAnswer
          question="スタイリストとは何で連絡をとりますか？"
          answer={
            <>
              スタイリストとのやり取りはLINEでおこないます。
              <br />
              サービス利用にはLINEの登録が必須となり、アカウントの開設をお願いしています。
            </>
          }
        />
        <QuestionAnswer
          question="返却にクリーニングは必要ですか？"
          answer={
            <>
              返却にクリーニングは不要です。すべて弊社でクリーニングをしています。
              <br />
              なお、お客様でクリーニングすることも可能です。洗濯表記にあったクリーニングをお願いしています。
            </>
          }
        />
        <QuestionAnswer
          question="コーデに返却方法について教えてください"
          answer={
            <>
              返却はコンビニ返却が便利です。伝票なしでUWearのLINE画面のバーコードを見せるだけで返却ができます。また「ヤマト集荷」「PUDO」でも返却は可能です。
            </>
          }
        />
        <QuestionAnswer
          question="アイテムを汚してしまったら？"
          answer={
            <>
              洋服を安心してお使いいただけるよう、洋服の汚れはUWearにて「修復」「クリーニング」しています。ご安心ください。ただ返却アイテムの再利用できない汚れが続いた場合は、ご連絡をさせて頂き、次回より洋服の買取をお願いする場合があります。
            </>
          }
        />
        <QuestionAnswer
          question="サービスの利用に制限や条件はありますか？"
          answer={
            <>
              UWearは日本国内が対象となり、「沖縄県・一部離島」に関しましてはサービス対象外となります。
              <br /> <br />
              対応できる体型として、
              <br />
              身長：160～180cm
              <br />
              体重：51～80kg
              <br />
              BMI：20～26
              <br />
              となります。
              <br />
              <br />
              ご対応できないお客様にはご不便をおかけしますが、何卒ご了承ください。
            </>
          }
        />
      </div>
    </div>
  );
};
