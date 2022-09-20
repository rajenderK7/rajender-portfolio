import React, { MouseEventHandler } from "react";
import DownloadButton from "./DownloadButton";
import LinkButton from "./LinkButton";
import { HiArrowSmRight } from "react-icons/hi";
import { HiDownload } from "react-icons/hi";
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
    <div className="flex w-full items-center px-2 justify-between lg:justify-between">
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
