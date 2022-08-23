type TProps = {
  readonly text: string;
  readonly className?: string;
};
export const FrontValidText = ({ text, className }: TProps) => {
  return <p className={`text-[#CB5F58] text-xs ${className ?? ""}`}>{text}</p>;
};
