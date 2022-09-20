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
  _updatedAt: Date;
  content: any;
}

const Blog: NextPage = ({
  title,
  author,
  mainImage,
  _updatedAt,
  description,
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
      />
      <div className="relative w-full h-36 lg:h-52">
        <Image src={mainImage} priority objectFit="cover" layout="fill" />
      </div>
      <main className="mx-3">
        <h1 className="my-4 text-4xl font-bold lg:font-extrabold tracking-tight text-gray-900 lg:text-5xl lg:leading-none">
          {title}
        </h1>
        <div className="font-inter flex justify-between items-center mt-2 text-[15px] text-gray-500">
          <p className="text-">{`by ${author}`}</p>
          <div className="flex space-x-4 mr-2 items-center">
            <p className="text-">{updatedAt}</p>
          </div>
        </div>
        <hr className="my-3 lg:my-5 h-px bg-gray-300 border-0"></hr>
        <div className="font-inter prose prose-h2:m-0 prose-a:m-0 prose-a:text-blue-600 max-w-none">
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
