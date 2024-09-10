import { ButtonSize, ButtonStatus } from "../../models/daysi-ui";
import clsx from "clsx";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  status?: ButtonStatus;
  size?: ButtonSize;
  label: string;
  square?: boolean;
}

export function Button({
  onClick,
  className,
  status = "primary",
  size = "md",
  label,
  square = true,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "btn",
        `btn-${size}`,
        `btn-${status}`,
        className,
        square && "rounded-none"
      )}
    >
      {label}
    </button>
  );
}
