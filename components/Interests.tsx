import Link from "next/link";
import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import Article, { ArticleProps } from "./Article";
import Card from "./Card";

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
    <Card className="mx-3 lg:mt-7 lg:m-0 my-4 border-none shadow-neu1 shadow-neu2 dark:shadow-darkneu1 dark:shadow-darkneu2 lg:shadow-none">
      <div className="font-inter lg:mx-0 p-4 lg:p-6">
        <h5 className="font-inter mb-2 text-xl font-bold">I also write ✒️</h5>
        <p className="mb-1 font-normal">
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
          <a className="mt-1 inline-flex items-center btn-basic">
            Go to Blog
            <HiArrowSmRight className="ml-1 text-xl" />
          </a>
        </Link>
      </div>
    </Card>
  );
};

export default Interests;
