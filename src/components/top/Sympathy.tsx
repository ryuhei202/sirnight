import { Worry } from "./Worry";

type TProps = {
  readonly className?: string;
};
export const Sympathy = ({ className }: TProps) => {
  return (
    <div className={`${className}`}>
      <p className="text-[6vw] sm:text-3xl text-center mx-auto font-bold leading-10">
        UWearの安心ポイント
      </p>
      <div className="flex flex-col font-medium px-[30px]">
        <div className="mt-12">
          <Worry type="left" content={<>手元にコーデを置いておける</>} />
          <Worry
            type="right"
            content={
              <>
                コーデを返却する前に次のコーデが届く仕組みを導入しました。これによって、手元にコーデがない期間がなくなります。
                <br />
                <br />
                常に新しいコーデを楽しむことができます。
              </>
            }
          />
        </div>
        <div className="mt-12">
          <Worry type="left" content={<>洋服を汚しても安心！免責つき！</>} />
          <Worry
            type="right"
            content={
              <>
                レンタルでは、汚すのが不安という声を受けて、年に2回までは汚しても大丈夫な免責（保険）制度を作りました。
                <br />
                <br />
                汚す不安がないお出かけをお楽しみください。
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};
