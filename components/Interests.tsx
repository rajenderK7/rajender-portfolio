import React from "react";
import Article, { ArticleProps } from "./Article";
import SectionHeading from "./SectionHeading";

const Interests = () => {
  const articles: ArticleProps[] = [
    {
      title: "Flutter Custom bottom navigation bar",
      link: "https://www.geeksforgeeks.org/flutter-custom-bottom-navigation-bar/#:~:text=A%20bottom%20navigation%20bar%20is,bottomNavigationBar%20argument.",
    },
    {
      title: "Gradient in Flutter Applications",
      link: "https://www.geeksforgeeks.org/gradient-in-flutter-applications/",
    },
  ];

  return (
    <div className="mt-1 lg:mt-5 pt-1 pb-2 bg-gradient-to-r from-cyan-500 to-blue-500">
      <SectionHeading title="Interests 🚀" className="text-white" />
      <div className="font-inter px-2 lg:px-3 pb-2 text-white mx-auto lg:text-center flex flex-col">
        <p className="italic">
          Published a couple of articles on Geeks For Geeks.
        </p>
        <p className="mt-2">Checkout my articles 👇</p>
        {articles.map((article, index) => {
          return (
            <Article key={index} title={article.title} link={article.link} />
          );
        })}
      </div>
    </div>
  );
};

export default Interests;
