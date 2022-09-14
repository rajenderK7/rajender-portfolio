import React, { MouseEventHandler } from "react";
import { HiArrowSmRight } from "react-icons/hi";
import { HiDownload } from "react-icons/hi";
import { HiMail } from "react-icons/hi";

interface LinkButtonProps {
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const LinkButton = ({ title, onClick, className }: LinkButtonProps) => {
  let icon: any;

  switch (title) {
    case "Projects": {
      icon = <HiArrowSmRight />;
      break;
    }
    case "Resume": {
      icon = <HiDownload />;
      break;
    }
    case "Mail": {
      icon = <HiMail />;
      break;
    }
  }

  return (
    <button
      type="button"
      className={`mx-2 my-2 px-3 py-2 flex items-center font-semibold text-sm lg:text-base text-center text-violet-500 bg-white border-gray-400 shadow-md rounded-lg hover:bg-slate-100 hover:border-none ${className}`}
      onClick={onClick}
    >
      {title}
      <span className="ml-2 text-xl">{icon}</span>
    </button>
  );
};

export default LinkButton;
