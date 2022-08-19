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
        coordinateNumber="コーデ#01"
        title="家族と週末のショッピング"
        mainText={
          <>
            ラフで落ち着いた〇〇〇で、
            <br />
            〇〇〇な印象に。
          </>
        }
        subText="同僚で意識している女性と週末にデート。私服を見られてがっかりされたくない...同僚で意識している女性と週末にデート。私服を見られてがっかりされたくない..."
      />
      <CoordinateCard
        imageFilePath="/images/coordinates/2.webp"
        coordinateNumber="コーデ#02"
        title="家族と週末のショッピング"
        mainText={
          <>
            ラフで落ち着いた〇〇〇で、
            <br />
            〇〇〇な印象に。
          </>
        }
        subText="同僚で意識している女性と週末にデート。私服を見られてがっかりされたくない...同僚で意識している女性と週末にデート。私服を見られてがっかりされたくない..."
      />
      <CoordinateCard
        imageFilePath="/images/coordinates/3.webp"
        coordinateNumber="コーデ#03"
        title="家族と週末のショッピング"
        mainText={
          <>
            ラフで落ち着いた〇〇〇で、
            <br />
            〇〇〇な印象に。
          </>
        }
        subText="同僚で意識している女性と週末にデート。私服を見られてがっかりされたくない...同僚で意識している女性と週末にデート。私服を見られてがっかりされたくない..."
      />
      <CoordinateCard
        imageFilePath="/images/coordinates/4.webp"
        coordinateNumber="コーデ#04"
        title="家族と週末のショッピング"
        mainText={
          <>
            ラフで落ち着いた〇〇〇で、
            <br />
            〇〇〇な印象に。
          </>
        }
        subText="同僚で意識している女性と週末にデート。私服を見られてがっかりされたくない...同僚で意識している女性と週末にデート。私服を見られてがっかりされたくない..."
      />
      <CoordinateCard
        imageFilePath="/images/coordinates/5.webp"
        coordinateNumber="コーデ#05"
        title="家族と週末のショッピング"
        mainText={
          <>
            ラフで落ち着いた〇〇〇で、
            <br />
            〇〇〇な印象に。
          </>
        }
        subText="同僚で意識している女性と週末にデート。私服を見られてがっかりされたくない...同僚で意識している女性と週末にデート。私服を見られてがっかりされたくない..."
      />
      {isOpenMore ? (
        <>
          <div className="animate-fadeIn">
            <CoordinateCard
              imageFilePath="/images/coordinates/6.webp"
              coordinateNumber="コーデ#06"
              title="家族と週末のショッピング"
              mainText={
                <>
                  ラフで落ち着いた〇〇〇で、
                  <br />
                  〇〇〇な印象に。
                </>
              }
              subText="同僚で意識している女性と週末にデート。私服を見られてがっかりされたくない...同僚で意識している女性と週末にデート。私服を見られてがっかりされたくない..."
            />
            <CoordinateCard
              imageFilePath="/images/coordinates/7.webp"
              coordinateNumber="コーデ#07"
              title="家族と週末のショッピング"
              mainText={
                <>
                  ラフで落ち着いた〇〇〇で、
                  <br />
                  〇〇〇な印象に。
                </>
              }
              subText="同僚で意識している女性と週末にデート。私服を見られてがっかりされたくない...同僚で意識している女性と週末にデート。私服を見られてがっかりされたくない..."
            />
            <CoordinateCard
              imageFilePath="/images/coordinates/8.webp"
              coordinateNumber="コーデ#08"
              title="家族と週末のショッピング"
              mainText={
                <>
                  ラフで落ち着いた〇〇〇で、
                  <br />
                  〇〇〇な印象に。
                </>
              }
              subText="同僚で意識している女性と週末にデート。私服を見られてがっかりされたくない...同僚で意識している女性と週末にデート。私服を見られてがっかりされたくない..."
            />
            <CoordinateCard
              imageFilePath="/images/coordinates/9.webp"
              coordinateNumber="コーデ#09"
              title="家族と週末のショッピング"
              mainText={
                <>
                  ラフで落ち着いた〇〇〇で、
                  <br />
                  〇〇〇な印象に。
                </>
              }
              subText="同僚で意識している女性と週末にデート。私服を見られてがっかりされたくない...同僚で意識している女性と週末にデート。私服を見られてがっかりされたくない..."
            />
            <CoordinateCard
              imageFilePath="/images/coordinates/10.webp"
              coordinateNumber="コーデ#10"
              title="家族と週末のショッピング"
              mainText={
                <>
                  ラフで落ち着いた〇〇〇で、
                  <br />
                  〇〇〇な印象に。
                </>
              }
              subText="同僚で意識している女性と週末にデート。私服を見られてがっかりされたくない...同僚で意識している女性と週末にデート。私服を見られてがっかりされたくない..."
            />
          </div>
        </>
      ) : (
        <div className="relative">
          <CoordinateCard
            imageFilePath="/images/coordinates/6.webp"
            coordinateNumber="コーデ#06"
            title="家族と週末のショッピング"
            mainText={
              <>
                ラフで落ち着いた〇〇〇で、
                <br />
                〇〇〇な印象に。
              </>
            }
            subText="同僚で意識している女性と週末にデート。私服を見られてがっかりされたくない...同僚で意識している女性と週末にデート。私服を見られてがっかりされたくない..."
            isBlur={true}
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
