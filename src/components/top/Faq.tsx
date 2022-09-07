import { QuestionAnswer } from "./QuestionAnswer";

export const Faq = () => {
  return (
    <div className="bg-clay py-28" id="faq">
      <p className="text-[6vw] sm:text-2xl text-center font-extrabold mb-14">
        よくあるご質問
      </p>
      <div className="border-b-2 border-solid border-[#D8D8D2]">
        <QuestionAnswer
          question="料金はレンタル回数ごとの支払いですか？"
          answer={
            <>
              UWearは月額制のサブスクリプションサービスです。プランによって、月額料金が変わります。
              <br />
              詳しくは料金プランのページをご覧ください。
            </>
          }
        />
        <QuestionAnswer
          question="スタイリストとLINE以外でやり取りできますか？"
          answer={
            <>
              スタイリストとのやり取りはLINEでおこないます。
              <br />
              サービス利用にはLINEの登録が必須となり、アカウントの開設をお願いしています。
            </>
          }
        />
        <QuestionAnswer
          question="コーデに返却期限はありますか？"
          answer={
            <>
              返却期限はありませんので、お客様がご満足いくまでコーデをご利用ください。
              <br />
              ※毎月のご利用料金は発生します。
            </>
          }
        />
        <QuestionAnswer
          question="返却方法を教えてください。"
          answer={
            <>
              返却はコンビニ返却が便利です。レンタル商品をダンボールに入れて「セブンイレブン」「ローソン」「ファミリーマート」にお持ちください。伝票なしでUWearのLINE画面のバーコードを見せるだけで返却ができます。また「ヤマト集荷」「PUDO」でも返却は可能です。
            </>
          }
        />
        <QuestionAnswer
          question="アイテムを汚してしまったら？"
          answer={
            <>
              UWearを安心してお使いいただけるよう、アイテムの汚れはUWearにて「修復」「クリーニング」しています。ただしレンタル品として再利用ができない状態になった場合は、ご連絡させて頂き、再利用出来ないアイテムが何度かあった場合は、次アイテムより買取をお願いしています。
            </>
          }
        />
        <QuestionAnswer
          question="気に入ったアイテムは購入できますか？"
          answer={
            <>
              レンタル中のアイテムに限り、LINEメニューから購入できます。購入したアイテムは返却しないように注意してください。なお返却後のアイテムの購入はできませんのでご了承ください。
            </>
          }
        />
      </div>
    </div>
  );
};
