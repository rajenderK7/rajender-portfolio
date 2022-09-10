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
    <div className="mt-2 pt-2 pb-3 bg-purple-600">
      <SectionHeading title="Interests 😎" className="text-white" />
      <div className="text-center text-white mx-auto text-[16px] lg:text-lg text-semibold flex flex-col">
        <p className="font-normal">I love to write articles in my leisure</p>
        <p className="font-normal">
          I have published a couple of articles on Geeks For Geeks.
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
