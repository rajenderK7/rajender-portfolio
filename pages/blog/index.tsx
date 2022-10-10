import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import BlogTile, { BlogTileProps } from "../../components/BlogTile";
import { sanityClient } from "../../sanity";

const Blogs = ({
  blogTiles,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="m-3 lg:mx-0">
      <div className="font-inter text-center lg:text-base">
        <p>🚀 Tutorials • Roadmaps • Resources ❤️‍🔥</p>
      </div>
      <div className="mt-3 flex flex-col items-center">
        {blogTiles.map((blog: BlogTileProps) => {
          return <BlogTile key={blog._id} {...blog} />;
        })}
      </div>
    </div>
  );
};

export default Blogs;

export const getStaticProps: GetStaticProps = async () => {
  const query = `*[_type == "blog" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    publishedAt,
    content,
  }`;

  const blogTiles: BlogTileProps[] = await sanityClient.fetch(query);

  return {
    props: {
      blogTiles,
    },
  };
};
