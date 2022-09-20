import Link from "next/link";
import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import Article, { ArticleProps } from "./Article";

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

const Interests = () => {
  return (
    <div className="font-inter mt-1 mb-4 lg:mb-5 lg:mt-5 lg:mx-0 p-4 lg:p-6 mx-2 bg-white rounded-lg border border-gray-300 shadow-md">
      <h5 className="font-inter mb-2 text-xl font-bold text-gray-900">
        I love to write 🤓
      </h5>
      <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
        Published a couple of articles on Geeks For Geeks.
      </p>
      <div className="mb-1">
        {articles.map((article, index) => {
          return (
            <Article key={index} title={article.title} link={article.link} />
          );
        })}
      </div>
      <Link href="/blog">
        <a className="mt-1 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg  bg-gradient-to-r from-pink-500 to-violet-500 hover:bg-violet-600 focus:outline-none shadow-md">
          Go to Blog
          <HiArrowSmRight className="ml-1 text-xl" />
        </a>
      </Link>
    </div>
  );
};

export default Interests;
