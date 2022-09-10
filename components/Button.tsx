import React from "react";
import ButtonProps from "../interfaces/buttonProps";

const Button = ({ title, onClick, className }: ButtonProps) => {
  return (
    <button
      className={`p-1 rounded-md hover:ring-1 hover:ring-gray-300 border-2 border-gray-200 ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
