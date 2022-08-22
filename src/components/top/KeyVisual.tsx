import { useCallback, useEffect, useRef, useState } from "react";
import { KeyVisualColumn } from "./KeyVisualColumn";

export const KeyVisual = () => {
  const [isLabelVisible, setIsLabelVisible] = useState(true);
  const isAnimated = useRef(false);

  const toggleVisibility = useCallback(() => {
    if (isAnimated.current) return;
    if (window.scrollY > 10) {
      isAnimated.current = true;
      setIsLabelVisible(false);
    }
  }, [isAnimated, setIsLabelVisible]);

  useEffect(() => {
    const keyVisuals = document.getElementById("key-visuals") as HTMLElement;
    window.addEventListener("scroll", toggleVisibility);
    setTimeout(() => {
      for (let i = 0; i < keyVisuals?.children.length; i++) {
        const child = keyVisuals?.children[i];
        child.classList.add("animate-infiniteScroll");
      }
    }, 3000);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [toggleVisibility]);

  return (
    <div className="w-hull h-screen overflow-hidden relative" id="key-visuals">
      <ul>
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
      <ul>
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
      <span
        className={`absolute bottom-32 inset-x-0 z-10 block bg-themeGray py-1 px-6 font-lora w-fit mx-auto text-clay rounded-full ${
          isLabelVisible ? "" : "transition opacity-0 duration-500"
        }`}
      >
        Scroll
      </span>
    </div>
  );
};
