type TProps = {
  readonly text: string;
};
export const FrontValidText = ({ text }: TProps) => {
  return <p className="text-[#CB5F58] text-xs">{text}</p>;
};
