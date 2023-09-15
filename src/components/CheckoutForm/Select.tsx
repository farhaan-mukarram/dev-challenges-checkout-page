import { FunctionComponent, SelectHTMLAttributes } from "react";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  startIcon: string;
  id: string;
  label: string;
  options: Array<{ value: string; label: string }>;
}

const Select: FunctionComponent<Props> = ({
  id,
  label,
  startIcon,
  options,
  placeholder,
  ...props
}) => {
  return (
    <div className="flex flex-col w-full space-y-2">
      <label className="text-[0.625rem] lg:text-xs text-[#4F4F4F]" htmlFor={id}>
        {label}
      </label>

      <div className="relative flex w-full">
        <img
          src={startIcon}
          alt={`${id}-icon`}
          className="absolute top-0 bottom-0 my-auto pointer-events-none left-4"
        />
        <select
          className="border border-[#828282] rounded-xl h-14 px-[3.25rem] bg-white w-full text-xs lg:text-base"
          id={id}
          {...props}
        >
          <option value="" disabled selected>
            {placeholder}
          </option>

          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
