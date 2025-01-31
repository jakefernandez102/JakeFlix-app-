/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

export interface FormField {
  name: string;
  type: string;
  placeholder: string;
  label?: string;
  required?: boolean;
  value?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export interface FormProps {
  onSubmit: (values: Record<string, any>) => void;
  onRegister?: (values: Record<string, any>) => void;
  initialValues?: Record<string, any>;
  fields: FormField[];
  mainButtontext?: string;
  hasSecondaryButton?: boolean;
  secondaryButtonText?: string;
  isLoginForm?: boolean;
  inLine?: boolean;
}

export const Form = ({
  onSubmit,
  fields,
  onRegister,
  initialValues,
  mainButtontext,
  hasSecondaryButton = false,
  secondaryButtonText,
  isLoginForm = false,
  inLine = false,
}: FormProps) => {
  const [formValues, setFormValues] = useState<Record<string, any>>(
    initialValues!,
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setFormValues((prev) => ({ ...prev, [name]: value.toLowerCase() }));
      return;
    }

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let formValid = true;
    const newErrors: Record<string, string> = {};

    // Perform validation
    fields.forEach((field) => {
      console.log(field);
      if (field.required && !formValues[field.name]) {
        formValid = false;
        newErrors[field.name] = `${field.label || field.name} is required`;
      }
    });

    if (formValid) {
      onSubmit(formValues);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form
      className={`flex w-full ${inLine ? "flex-row" : "flex-col"} justify-between gap-5 text-white`}
      onSubmit={handleSubmit}
    >
      {fields.map((field) => (
        <div key={field.name} className="flex w-full flex-col">
          {field.label && (
            <label htmlFor={field.name} className="text-lg">
              {field.label}
            </label>
          )}
          <Input
            className="w-full rounded-sm border border-white px-2 py-4"
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={formValues[field.name] || ""}
            onChange={handleInputChange}
            icon={field.icon}
            iconPosition={field.iconPosition}
          />
          {errors[field.name] && (
            <span className="text-sm text-red-500">{errors[field.name]}</span>
          )}
        </div>
      ))}
      <Button
        type="submit"
        icon={inLine ? <FaAngleRight /> : undefined}
        iconPosition={inLine ? "right" : undefined}
        label={mainButtontext ? mainButtontext : "Submit"}
        className={`block ${inLine ? "w-[40%]" : ""} cursor-pointer rounded-sm bg-red-500 px-2 py-2 text-white transition-all duration-200 hover:shadow-lg hover:shadow-red-900`}
      />

      {hasSecondaryButton && (
        <>
          <p className={"self-center"}>O</p>
          <Button
            type={"button"}
            label={secondaryButtonText ? secondaryButtonText : "Register"}
            className={"rounded-sm bg-stone-600 px-2 py-2 text-white"}
            onClick={() => onRegister && onRegister(formValues)}
          />
        </>
      )}
      {isLoginForm && (
        <>
          <a href={"#"} className="self-center">
            ¿Forgot Password?
          </a>
          <div className="flex gap-5">
            <input id={"rememberme"} name={"rememberme"} type="checkbox" />
            <label htmlFor="rememberme">Remember Me</label>
          </div>
          <div>
            <p className="text-gray-500">
              ¿First time on Jakeflix?{" "}
              <Link className="text-slate-100" to="/auth/register">
                Subscríbe now.
              </Link>{" "}
            </p>
          </div>
          <p className="text-gray-500">
            This page is protected by Google reCAPTCHA to verify that you are
            not a robot.{" "}
            <a href={"#"} className="text-blue-400">
              More info.
            </a>
          </p>
        </>
      )}
    </form>
  );
};
