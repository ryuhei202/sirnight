import { ChangeEventHandler } from "react";

type TProps = {
  id?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  className?: string;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
};
export const TextAreaAlt = ({
  id,
  className,
  value,
  onChange,
  placeholder,
  rows = 1,
  disabled = false,
}: TProps) => {
  return (
    <textarea
      id={id ?? ""}
      className={`p-3 w-full rounded-md border border-themeGray bg-clay resize-none ${
        className ?? ""
      }`}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      rows={rows}
    ></textarea>
  );
};
