import Link from "next/link";
import { useRouter } from "next/router";
import { analyzeEvent } from "../../lib/gtag";
import { Button } from "./Button";

export const Header = () => {
  const router = useRouter();
  const handleClickPlan = () => {
    analyzeEvent({
      action: "click",
      category: "footer_plan",
    }).then(() => router.push({ pathname: "/plan" }));
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-[64px] bg-clay border-b-[#D8D8D2] border-b-[1px]">
      <div className="flex justify-between items-center mx-[24px]">
        <Link
          href={{ pathname: "/" }}
          className="flex justify-center items-center h-[64px]"
        >
          <img src="/images/logos/gray.svg" alt="logo" className="h-[30px]" />
        </Link>
        <Button
          onClick={handleClickPlan}
          className="w-[120px] flex justify-center items-center cursor-pointer"
        >
          料金プラン
        </Button>
      </div>
    </div>
  );
};
