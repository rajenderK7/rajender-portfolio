import { MouseEventHandler } from "react";

interface ButtonProps {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export default ButtonProps;
