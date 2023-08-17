type TProps = {
  date: string;
  type?: "dot" | "kanji";
};

export const handleDate = ({ date, type = "dot" }: TProps) => {
  const d = new Date(date);
  const japanDateTime = new Date(d.setHours(d.getHours() + 9)).toISOString();
  const regex = new RegExp("T.+Z", "g");
  const dateTimeRemoved = japanDateTime.replace(regex, "");

  const formattedDate =
    type === "dot"
      ? dateTimeRemoved.replace(/-/g, ".")
      : dateTimeRemoved.replace(/(\d+)-(\d+)-(\d+)/g, "$1年$2月$3日");

  return formattedDate;
};
