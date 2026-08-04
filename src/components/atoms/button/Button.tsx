import "./Button.css";

export interface ButtonProps {
  status?: "active" | "notActive";
  alignment: "center" | "right";
  hasIcon?: boolean;
  size: "small" | "medium" | "large";
  icon?: string;
  title?: string;
  onClick: () => void;
}

export const Button = ({
  status = "notActive",
  alignment,
  hasIcon = false,
  size,
  icon,
  title,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`Button ${size} ${alignment} ${status}`}
      onClick={onClick}
    >
      <div className="ButtonContent">
        <div>{title}</div>
        {hasIcon && <img src={icon} alt={title} />}
      </div>
    </button>
  );
};
