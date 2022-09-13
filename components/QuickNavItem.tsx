import React, { MouseEventHandler } from "react";
import DownloadButton from "./DownloadButton";
import LinkButton from "./LinkButton";
import { HiMail } from "react-icons/hi";

interface QuickNavItemProps {
  title: string;
  buttonTitle: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  download?: boolean;
  url?: string;
}

const MailHelper = ({ title, mail }: any) => {
  return (
    <a
      href={mail}
      className={`mx-2 my-2 px-3 py-2 flex items-center font-semibold text-sm lg:text-base text-center text-violet-500 bg-white border-gray-400 shadow-md rounded-lg hover:bg-violet-500 hover:text-white hover:border-none`}
    >
      {title}
      <span className="ml-2 text-xl">{<HiMail />}</span>
    </a>
  );
};

const QuickNavItem = ({
  title,
  onClick,
  className,
  buttonTitle,
  download,
  url,
}: QuickNavItemProps) => {
  let action;

  switch (buttonTitle) {
    case "Projects": {
      action = <LinkButton title={buttonTitle} onClick={onClick} />;
      break;
    }
    case "Resume": {
      action = <DownloadButton url={url ?? ""} title={buttonTitle} />;
      break;
    }
    case "Mail": {
      action = (
        <MailHelper mail="mailto:rajenderkatkuri123@gmail.com" title="Mail" />
      );
      break;
    }
  }

  return (
    <div className="flex w-full items-center px-2 justify-center lg:justify-between">
      <p
        className={`text-sm lg:text-base text-white italic font-normal ${className}`}
      >
        {title}
      </p>
      {action}
    </div>
  );
};

export default QuickNavItem;
