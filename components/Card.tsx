import React from "react";

interface CardProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={`border border-gray-300 dark:border-gray-700 shadow-md rounded-lg ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
