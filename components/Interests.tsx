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
    <div className="mt-2 py-2 bg-gradient-to-r from-violet-500 to-pink-500 shadow-black">
      <SectionHeading title="Interests 🚀" className="text-white" />
      <div className="font-inter px-2 lg:px-3 pb-2 text-white mx-auto lg:text-lg flex flex-col">
        <p>I love to write articles in my leisure.</p>
        <p>I have published a couple of articles on Geeks For Geeks.</p>
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
