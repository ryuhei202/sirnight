import Image from "next/image";
import { KeyVisualColumn } from "./KeyVisualColumn";

type TProps = {
  readonly className?: string;
};
export const KeyVisual = ({ className }: TProps) => {
  return (
    <div className={`w-[100%] ${className ?? ""}`}>
      <KeyVisualColumn imageNames={{ left: "1-1", right: "1-2" }} />
      <KeyVisualColumn imageNames={{ left: "2-1", right: "2-2" }} />
      <KeyVisualColumn imageNames={{ left: "3-1", right: "3-2" }} />
    </div>
  );
};
