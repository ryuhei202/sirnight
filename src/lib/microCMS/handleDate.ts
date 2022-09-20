type TProps = {
  date: string;
  type?: "dot" | "kanji";
};

export const handleDate = ({ date, type = "dot" }: TProps) => {
  const regex = new RegExp("T.+Z", "g");
  const dateTimeRemoved = date.replace(regex, "");

  const formattedDate =
    type === "dot"
      ? dateTimeRemoved.replace(/-/g, ".")
      : dateTimeRemoved.replace(/(\d+)-(\d+)-(\d+)/g, "$1年$2月$3日");

  return formattedDate;
};
