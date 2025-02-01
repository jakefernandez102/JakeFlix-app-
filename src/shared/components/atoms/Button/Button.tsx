export type ButtonTypes = "button" | "submit" | "reset";

export interface ButtonI {
  label?: string;
  onClick?: () => void;
  className?: string;
  type: ButtonTypes;
  icon?: React.ReactNode;
  iconPosition?: "left" | "center" | "right";
}
export const Button = ({
  label,
  className,
  onClick,
  type,
  icon,
  iconPosition,
}: ButtonI) => {
  return (
    <button onClick={onClick} className={className} type={type}>
      {!label && icon && <span className={"self-center"}>{icon}</span>}
      {label && !icon && <span className={"self-center"}>{label}</span>}

      {label && icon && iconPosition && (
        <div
          className={`flex ${iconPosition === "center" ? "flex-col" : "flex-row justify-center"} items-center gap-2`}
        >
          {iconPosition === "left" && icon}
          <span className={"self-center text-lg"}>{label}</span>
          {iconPosition === "right" && icon}
        </div>
      )}
    </button>
  );
};
