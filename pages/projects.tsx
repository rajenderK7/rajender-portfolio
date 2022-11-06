import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import { sanityClient } from "../sanity";

interface ProjectProps {
  _id: string;
  title: string;
  slug?: string;
  author: string;
  description: any;
  liveSite?: string;
  github?: string;
  updatedAt: Date;
  imgURL: string;
}

const Projects: NextPage = ({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <h1 className="mt-3 font-bold font-inter text-xl text-center">
        My Projects 🧪
      </h1>
      <div className="mx-3 mt-1 lg:flex flex-col items-center">
        {projects.map((project: ProjectProps) => {
          return <ProjectCard key={project._id} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  const query = `*[_type=="project" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id,
    _updatedAt,
    "author": author -> name,
    slug,
    title,
    description,
    "imgURL": mainImage.asset->url,
    liveSite,
    github,
  }`;

  const projects: ProjectProps[] = await sanityClient.fetch(query);

  return {
    props: {
      projects,
    },
  };
};
