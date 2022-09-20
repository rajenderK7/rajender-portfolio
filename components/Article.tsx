import React from "react";

export interface ArticleProps {
  title: string;
  link: string;
}

const Article = ({ title, link }: ArticleProps) => {
  return (
    <li className="list-none">
      <small className="mr-1">🔗</small>
      <a href={link} target="_blank" className="ext-link">
        {title}
      </a>
    </li>
  );
};

export default Article;
