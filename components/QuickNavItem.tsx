import React, { MouseEventHandler } from "react";
import DownloadButton from "./DownloadButton";
import LinkButton from "./LinkButton";
import { HiArrowSmRight } from "react-icons/hi";
import MailHelper from "./MailHelper";

interface QuickNavItemProps {
  title: string;
  buttonTitle: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  download?: boolean;
  url?: string;
}

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
      action = (
        <LinkButton
          title={buttonTitle}
          onClick={onClick}
          icon={<HiArrowSmRight />}
        />
      );
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
    <div
      className={`my-1 lg:my-0 flex lg:flex-col lg:items-start items-center justify-between lg:justify-between ${className}`}
    >
      <p className={`text-base`}>{title}</p>
      <div className="ml-[7px] lg:mx-0 lg:mt-2">{action}</div>
    </div>
  );
};

export default QuickNavItem;
