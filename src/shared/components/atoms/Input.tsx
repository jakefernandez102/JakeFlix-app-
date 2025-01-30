import { useState } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  onClick?: () => void;
}

export const Input: React.FC<InputProps> = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
  className,
  icon,
  iconPosition,
  onClick,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex w-full flex-col">
      <div className="relative">
        {/* Input field with optional icon */}
        {iconPosition === "left" && icon && (
          <div className="absolute top-1/2 left-3 -translate-y-1/2 transform">
            {/* icon inside the input */}
            <span className="text-2xl">{icon}</span>
          </div>
        )}
        <input
          onClick={onClick}
          className={`w-full rounded-sm border border-slate-600 px-2 py-4 text-white ${iconPosition === "left" ? "pl-10" : ""} ${className}`} // Add padding to the left to avoid icon overlap
          type={type === "password" && !showPassword ? type : "text"}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {iconPosition === "right" && icon && (
          <div className="absolute top-1/2 right-4 -translate-y-1/2 transform">
            {/* icon inside the input */}
            <span onClick={() => setShowPassword(!showPassword)}>{icon}</span>
          </div>
        )}
      </div>

      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};
