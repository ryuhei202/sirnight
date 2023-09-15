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
    <div
      className={`relative after:absolute after:border-x-[5px] after:border-t-[5px] after:border-x-transparent after:border-themeGray after:right-[10px] after:top-[23px] ${
        className ?? ""
      }`}
    >
      <select
        id={id ?? ""}
        className={`p-3 w-full rounded appearance-none form-select bg-clay border-solid border-[1px] border-themeGray `}
        value={value}
        onChange={onChange}
      >
        {placeholder && (
          <option value="" disabled style={{ display: "none" }}>
            {placeholder}
          </option>
        )}
        {children}
      </select>
    </div>
  );
};
