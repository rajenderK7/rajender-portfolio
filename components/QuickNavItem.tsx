import React, { MouseEventHandler } from "react";
import LinkButton from "./LinkButton";

interface QuickNavItemProps {
  title: string;
  buttonTitle: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const QuickNavItem = ({
  title,
  onClick,
  className,
  buttonTitle,
}: QuickNavItemProps) => {
  return (
    <div className="flex w-full items-center px-2 justify-center lg:justify-between">
      <p
        className={`text-sm lg:text-base text-white italic font-semibold ${className}`}
      >
        {title}
      </p>
      <LinkButton title={buttonTitle} onClick={onClick} />
    </div>
  );
};

export default QuickNavItem;
