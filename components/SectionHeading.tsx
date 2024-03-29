import React from "react";

interface SectionHeadingProps {
  title: string;
  className?: string;
}

const SectionHeading = ({ title, className }: SectionHeadingProps) => {
  return (
    <h1
      className={`font-bold text-[20px] lg:text-[30px] text-center font-spacemono text-black dark:text-white ${className}`}
    >
      {title}
    </h1>
  );
};

export default SectionHeading;
