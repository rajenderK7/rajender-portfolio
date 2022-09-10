import React from "react";

export interface ArticleProps {
  title: string;
  link: string;
}

const Article = ({ title, link }: ArticleProps) => {
  return (
    <a href={link} target="_blank" className="text-black underline">
      {title}
    </a>
  );
};

export default Article;
