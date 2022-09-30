import Link from "next/link";
import React from "react";
import TimeAgo from "timeago-react";
import { readTimeCalculator } from "../lib/utils/read_time_calculator";

export interface BlogTileProps {
  _id?: string;
  _updatedAt: Date;
  _createdAt: Date;
  title?: string;
  description?: string;
  slug: string;
  content: string;
}

const BlogTile = ({
  title,
  description,
  slug,
  content,
  _createdAt,
}: BlogTileProps) => {
  const readTime: number = readTimeCalculator(content);
  const createdAt = <TimeAgo datetime={_createdAt} live={false} />;

  return (
    <div className="mt-1 mb-3 px-3 py-4 lg:py-6 lg:px-10 max-w-2xl lg:mt-5 bg-white rounded-lg border border-violet-300 dark:bg-black dark:border-none lg:shadow-lg shadow-md">
      <Link href={`/blog/${slug}`}>
        <a className="text-3xl font-bold hover:text-gray-900 text-violet-800 dark:text-white break-words">
          {title}
        </a>
      </Link>
      <div className="mt-2 font-inter">
        <p className="font-inter font-normal text-gray-500">{description}</p>
        <div className="flex justify-between mt-3">
          <div className="flex space-x-4 lg:space-x-10">
            <Link href="/me">
              <a className="inline-flex items-center text-end text-sm text-blue-700 font-medium">
                <span className="text-black mr-1 dark:text-gray-500">by </span>
                Rajender
              </a>
            </Link>
            <p className="text-end text-sm">{createdAt}</p>
          </div>
          <p className="text-end text-sm">{`${readTime} min read`}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogTile;
