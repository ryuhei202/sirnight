import { QuestionAnswer } from "./QuestionAnswer";

export const Faq = () => {
  return (
    <div className="bg-clay py-28" id="faq">
      <p className="text-2xl text-center font-extrabold tracking-wider mb-14">
        よくあるご質問
      </p>
      <div className="border-b-2 border-solid border-[#D8D8D2]">
        <QuestionAnswer
          question="配送前に中身を見ることはできますか？"
          answer="UWearでは、新しい服との出会いやスタイリストからの提案を楽しんでいただきたいと考えているため、事前にコーデやアイテムお見せすることはご遠慮いただいております。もちろん、お客様からいただく情報や好みも取り入れてコーデを作成いたしますので、ご不安な点などございましたら、お気軽にスタイリストへご質問ください。"
        />
        <QuestionAnswer
          question="どんなラインナップのアイテムがありますか？"
          answer="季節ごとにコーデをお楽しみいただけるよう、幅広く取り揃えております。カジュアルプランでレンタル可能なアイテムは、シャツ・カットソー・パーカー・ニット、デニム・チノパン・ワークパンツなどを含む、ベーシックなアイテムを中心に取り揃えております。ジャケパンプランの場合、レンタルアイテムにジャケットが加わります。"
        />
        <QuestionAnswer
          question="どんなジャンルのコーデも対応していますか？"
          answer="leeapでは、取り入れやすいベーシックなアイテムを中心とした、清涼感のあるコーデをメインにしております。HPにも随時コーデ例を掲載させていただいておりますので、ご参考になれば幸いです。"
        />
        <QuestionAnswer
          question="サイズが合わない時は交換してもらえますか？"
          answer="届いたコーデを着用されてサイズが合わないと感じた場合は、コーデを配送してから1週間以内にスタイリストまでご連絡下さい。必ず着用されたお写真をスタイリストまで送って頂き、明らかにサイズが合っていないと判断した場合にのみ、1配送に1回までスタイリストより新たにサイズを調整した該当アイテムをお送りさせて頂きます。配送より1週間以降の場合、着用可能と判断させて頂いた場合、イメージの相違と判断した場合は交換配送は致し兼ねますのでご了承下さい。"
        />
        <QuestionAnswer
          question="洋服を返却する際、どういった流れになりますか？"
          answer="返却予定のレンタルアイテムをお届け時のダンボールに入れて頂き、ご返却ください。返却方法は「コンビニ・ヤマト営業所への持ち込み」と「ヤマトの自宅集荷」がございます。下記の「コンビニ・ヤマト営業所への持ち込みの場合」と「ヤマトの自宅集荷の場合」をご確認下さい。"
        />
        <QuestionAnswer
          question="返すときはクリーニングしないといけないですか？"
          answer="クリーニングは不要です。返却アイテムを確認後、当社が責任をもってクリーニングに出しておりますのでご安心ください。"
        />
      </div>
    </div>
  );
};