import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import React from "react";
import { serialize } from "next-mdx-remote/serialize";
import { sanityClient } from "../../sanity";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import TimeAgo from "timeago-react";
import Metatags from "../../components/MetaTags";
import { HiMail } from "react-icons/hi";

interface BlogProps {
  title: string;
  slug?: string;
  author: string;
  mainImage: string;
  description: string;
  _createdAt: Date;
  _updatedAt: Date;
  content: any;
}

const Blog: NextPage = ({
  title,
  author,
  mainImage,
  publishedAt,
  _updatedAt,
  description,
  content,
  slug,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const publishedTime = <TimeAgo datetime={publishedAt} live={false} />;
  const updatedAt = <TimeAgo datetime={_updatedAt} live={false} />;

  const copyShareLink = () => {
    const shareLink = location.href;
    navigator.clipboard.writeText(shareLink);
  };

  return (
    <div className="lg:mx-0">
      <Metatags
        title={title}
        description={description}
        author={author}
        image={mainImage}
        url={`https://rajender.dev/blog/${slug}`}
      />
      <div className="relative w-full h-36 lg:h-52">
        <Image src={mainImage} priority objectFit="cover" layout="fill" />
      </div>
      <main className="mx-3">
        <h1 className="my-4 text-4xl font-bold lg:font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-5xl lg:leading-none">
          {title}
        </h1>
        <div className="font-inter flex justify-between items-start text-[15px] text-gray-500">
          <p className=" text-black dark:text-white">{`by ${author}`}</p>
          <div className="flex flex-col lg:space-x-4 items-end lg:items-center text-sm lg:flex lg:flex-row">
            <div className="hidden lg:flex">
              Posted:
              <p className="ml-2 text-black dark:text-gray-400">
                {publishedTime}
              </p>
            </div>
            <div className="flex">
              Updated:
              <p className="ml-2 text-black dark:text-gray-400">{updatedAt}</p>
            </div>
          </div>
        </div>
        <hr className="my-3 lg:my-5 h-px bg-gray-300 border-0"></hr>
        <div className="font-inter prose prose-h2:m-0 prose-a:m-0 prose-a:text-blue-600 max-w-none dark:prose-headings:text-white dark:prose-blockquote:text-white dark:prose-p:text-gray-300 dark:prose-li:text-white dark:prose-figcaption:text-white dark:prose-pre:after:text-white dark:prose-lead:text-white dark:prose-ol:text-white dark:prose-code:text-white dark:prose-strong:text-white prose-img:object-cover">
          <MDXRemote {...content} />
        </div>
        <hr className="my-5 lg:my-8 h-px bg-gray-400 border-0"></hr>
        <div className="font-inter flex items-center justify-center mb-5">
          <p className="mr-3">Feedback or Suggestions</p>
          <a href={"mailto:rajenderkatkuri123@gmail.com"}>
            <HiMail className="text-xl" />
          </a>
        </div>
      </main>
    </div>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug;

  const query = `*[_type == "blog" && !(_id in path("drafts.**")) && slug.current=="${slug}"][0] {
    "author": (author -> {name}).name,
    _updatedAt,
    publishedAt,
    title,
    description,
    content,
    "mainImage": mainImage.asset->url
}`;

  const blog: BlogProps = await sanityClient.fetch(query);

  blog.content = await serialize(blog.content);

  return {
    props: {
      ...blog,
      slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type == "blog" && !(_id in path("drafts.**"))] {
    "slug": slug.current
  }`;

  const blogs: BlogProps[] = await sanityClient.fetch(query);

  const paths = blogs.map((blog: BlogProps) => {
    return {
      params: { slug: blog.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
