type TProps = {
  id?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  placeholder?: string;
  children?: React.ReactNode;
  className?: string;
};
export const DropdownMenuAlt = ({
  id,
  value,
  onChange,
  placeholder,
  children,
  className,
}: TProps) => {
  return (
    <select
      id={id ?? ""}
      className={`p-3 w-full rounded bg-clay border-solid border-[1px] border-themeGray ${
        className ?? ""
      }`}
      value={value}
      onChange={onChange}
    >
      {placeholder && (
        <option value="" disabled selected style={{ display: "none" }}>
          {placeholder}
        </option>
      )}
      {children}
    </select>
  );
};
