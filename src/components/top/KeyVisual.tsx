import { KeyVisualColumn } from "./KeyVisualColumn";

type TProps = {
  readonly className?: string;
};
export const KeyVisual = ({ className }: TProps) => {
  return (
    <div
      className={`w-full h-[828px] first:animate-infiniteScrollFirst last:animate-infiniteScrollLast ${
        className ?? ""
      }`}
    >
      <ul className="h-[1104px] overflow-hidden">
        <li>
          <KeyVisualColumn
            imageNames={{ left: "1-1", right: "1-2" }}
            leftAnimateClass="animate-sixthFadeOutPanel"
            rightAnimateClass="animate-firstFadeOutPanel"
          />
        </li>
        <li>
          <KeyVisualColumn
            imageNames={{ left: "2-1", right: "2-2" }}
            leftAnimateClass="animate-secondFadeOutPanel"
            rightAnimateClass="animate-fifthFadeOutPanel"
          />
        </li>
        <li>
          <KeyVisualColumn
            imageNames={{ left: "3-1", right: "3-2" }}
            leftAnimateClass="animate-seventhFadeOutPanel"
            rightAnimateClass="animate-thirdFadeOutPanel"
          />
        </li>
        <li>
          <KeyVisualColumn
            imageNames={{ left: "4-1", right: "4-2" }}
            leftAnimateClass="animate-fourthFadeOutPanel"
            rightAnimateClass="animate-eighthFadeOutPanel"
          />
        </li>
        <li>
          <KeyVisualColumn imageNames={{ left: "2-2", right: "2-1" }} />
        </li>
        <li>
          <KeyVisualColumn imageNames={{ left: "1-2", right: "1-1" }} />
        </li>
        <li>
          <KeyVisualColumn imageNames={{ left: "4-2", right: "4-1" }} />
        </li>
        <li>
          <KeyVisualColumn imageNames={{ left: "3-2", right: "3-1" }} />
        </li>
      </ul>
      <ul className="h-[1104px] overflow-hidden">
        <li>
          <KeyVisualColumn imageNames={{ left: "1-1", right: "1-2" }} />
        </li>
        <li>
          <KeyVisualColumn imageNames={{ left: "2-1", right: "2-2" }} />
        </li>
        <li>
          <KeyVisualColumn imageNames={{ left: "3-1", right: "3-2" }} />
        </li>
        <li>
          <KeyVisualColumn imageNames={{ left: "4-1", right: "4-2" }} />
        </li>
        <li>
          <KeyVisualColumn imageNames={{ left: "2-2", right: "2-1" }} />
        </li>
        <li>
          <KeyVisualColumn imageNames={{ left: "1-2", right: "1-1" }} />
        </li>
        <li>
          <KeyVisualColumn imageNames={{ left: "4-2", right: "4-1" }} />
        </li>
        <li>
          <KeyVisualColumn imageNames={{ left: "3-2", right: "3-1" }} />
        </li>
      </ul>
    </div>
  );
};
