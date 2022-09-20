import React, { MouseEventHandler } from "react";

interface LinkButtonProps {
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  icon?: any;
}

const LinkButton = ({ title, onClick, className, icon }: LinkButtonProps) => {
  return (
    <button
      type="button"
      className={`btn-basic ${className}`}
      onClick={onClick}
    >
      {title}
      <span className="ml-2 text-xl">{icon}</span>
    </button>
  );
};

export default LinkButton;
