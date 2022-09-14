import React from "react";
import { HiDownload } from "react-icons/hi";

interface DownloadButtonProps {
  title: string;
  url: string;
  className?: string;
}

const DownloadButton = ({ title, url, className }: DownloadButtonProps) => {
  return (
    <a
      className={`mx-2 my-2 px-3 py-2 flex items-center font-semibold text-sm lg:text-base text-center text-violet-500 bg-white border-gray-400 shadow-md rounded-lg hover:bg-slate-100 hover:border-none ${className}`}
      href={`${url}?dl=`}
    >
      {title}
      <span className="ml-2 text-xl">
        <HiDownload />
      </span>
    </a>
  );
};

export default DownloadButton;
