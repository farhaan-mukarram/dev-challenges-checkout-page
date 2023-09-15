import { FunctionComponent, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  startIcon: string;
}

const Input: FunctionComponent<Props> = ({
  id,
  label,
  type,
  startIcon,
  ...props
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={id} className="text-[0.625rem] lg:text-xs text-[#4F4F4F]">
        {label}
      </label>

      <div className="relative flex w-full">
        <img
          src={startIcon}
          alt={`${id}-icon`}
          className="absolute top-0 bottom-0 my-auto pointer-events-none left-4"
        />
        <input
          id={id}
          {...props}
          className="border border-[#828282] rounded-xl h-14 px-[3.25rem] w-full text-xs lg:text-base [&::placeholder]:lg:text-base [&::placeholder]:text-xs"
          type={type ?? "text"}
        />
      </div>
    </div>
  );
};

export default Input;
