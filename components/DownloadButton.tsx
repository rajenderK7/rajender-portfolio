import React from "react";
import { HiDownload } from "react-icons/hi";

interface DownloadButtonProps {
  title: string;
  url: string;
  className?: string;
}

const DownloadButton = ({ title, url, className }: DownloadButtonProps) => {
  return (
    <a className={`btn-basic ${className}`} href={`${url}?dl=`}>
      {title}
      <span className="ml-2 text-xl">
        <HiDownload />
      </span>
    </a>
  );
};

export default DownloadButton;
