import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMembersCreate } from "../../api/members/useMembersCreate";
import { findPlanById } from "../../models/plan/Plan";

type TProps = {
  readonly memberId: number;
  readonly planId: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly firstNameKana: string;
  readonly lastNameKana: string;
  readonly birthDay: Date;
  readonly height: number;
  readonly weight: number;
  readonly prefecture: string;
  readonly email: string;
  readonly maskedCardNumber: string;
  readonly serialCode?: string;
  readonly customerCardId: number;
  readonly onBack: () => void;
};

export const RegisterConfirm = ({
  memberId,
  planId,
  firstName,
  lastName,
  firstNameKana,
  lastNameKana,
  birthDay,
  height,
  weight,
  prefecture,
  email,
  maskedCardNumber,
  serialCode,
  customerCardId,
  onBack,
}: TProps) => {
  const router = useRouter();
  const [error, setError] = useState<string>();
  const { mutate, isLoading } = useMembersCreate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [error]);

  const plan = findPlanById(planId);
  const convertDateToStr = (): string => {
    const year = birthDay.getFullYear();
    const month = ("00" + birthDay.getMonth()).slice(-2);
    const date = ("00" + birthDay.getDate()).slice(-2);
    return `${year}/${month}/${date}`;
  };
  const handleSubmit = () => {
    const params = {
      memberId,
      planId,
      firstName,
      lastName,
      firstNameKana,
      lastNameKana,
      birthDay,
      height,
      weight,
      prefecture,
      customerCardId,
      serialCode,
    };
    mutate(params, {
      onSuccess: () => {
        router.push("/register/thanks");
      },
      onError: () => {
        setError("予期せぬエラーが発生しました");
      },
    });
  };

  return (
    <div className="h-full px-12">
      {error && (
        <div className="mt-12">
          <p className="bg-[#CB5F58] text-clay p-3">{error}</p>
        </div>
      )}
      <div className="mt-9">
        <p className="font-bold text-xl text-center">ご登録プラン</p>
        <div className="pt-3">
          <div>
            <p className="text-xs">料金プラン</p>
            <p className="pl-3 font-bold">{`${plan.jpName}プラン`}</p>
          </div>
          <div className="pt-2">
            <p className="text-xs">月額料金</p>
            <p className="pl-3 font-bold">
              税込¥{plan.price.withoutTax.toLocaleString()}(¥
              {plan.price.withTax.toLocaleString()})
            </p>
          </div>
        </div>
      </div>
      <div className="mt-9">
        <p className="font-bold text-xl text-center">基本情報</p>
        <div className="pt-3">
          <div>
            <p className="text-xs">氏名</p>
            <p className="pl-3 font-bold">{`${lastName} ${firstName}(${lastNameKana} ${firstNameKana})  `}</p>
          </div>
          <div className="pt-2">
            <p className="text-xs">生年月日</p>
            <p className="pl-3 font-bold">{convertDateToStr()}</p>
          </div>
          <div className="pt-2">
            <p className="text-xs">身長</p>
            <p className="pl-3 font-bold">{height}cm</p>
          </div>
          <div className="pt-2">
            <p className="text-xs">体重</p>
            <p className="pl-3 font-bold">{weight}kg</p>
          </div>
          <div className="pt-2">
            <p className="text-xs">住まい</p>
            <p className="pl-3 font-bold">{prefecture}</p>
          </div>
        </div>
      </div>
      <div className="mt-9">
        <p className="font-bold text-xl text-center">ログイン情報</p>
        <div className="pt-3">
          <div>
            <p className="text-xs">ログインID(メールアドレス)</p>
            <p className="pl-3 font-bold">{email}</p>
          </div>
        </div>
      </div>
      <div className="mt-9">
        <p className="font-bold text-xl text-center">お支払い情報</p>
        <div className="pt-3">
          <div>
            <p className="text-xs">カード番号</p>
            <p className="pl-3 font-bold">{maskedCardNumber}</p>
          </div>
          <div className="pt-2">
            <p className="text-xs">クーポンコード</p>
            <p className="pl-3 font-bold">{serialCode ?? "なし"}</p>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className={`relative inline-block p-3 text-center w-full font-medium text-base mt-12 rounded-full bg-themeGray text-slate-200 ${
            isLoading && "bg-[#C8C9C3]"
          }`}
        >
          会員登録をする
        </button>
        <div onClick={onBack} className="text-center text-xs pt-6 pb-24">
          <span className="border-b-[1px] border-themeGray">
            お支払い情報登録に戻る
          </span>
        </div>
      </div>
    </div>
  );
};