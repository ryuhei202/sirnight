type TProps = {
  readonly content: string;
};

export const NewsContent = ({ content }: TProps) => {
  return (
    <div
      className="newsContent pb-12 border-b-[1px] border-[#D8D8D2]"
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
};
