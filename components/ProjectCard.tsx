import Image from "next/image";
import React from "react";
import { BsGlobe } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";
import ReadMoreButton from "./ReadMoreButton";

interface ProjectProps {
  title: string;
  slug?: string;
  author: string;
  description: string;
  liveSite?: string;
  github?: string;
  updatedAt: Date;
  imgURL: string;
}

const ProjectCard = ({
  title,
  slug,
  author,
  description,
  updatedAt,
  github,
  liveSite,
  imgURL,
}: ProjectProps) => {
  return (
    <div className="my-3 lg:max-w-2xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 font-inter">
      <div className="relative h-52 ">
        <Image
          className="rounded-t-lg"
          src={imgURL}
          alt={title}
          objectFit="contain"
          layout="fill"
        />
      </div>
      <div className="p-3">
        <h1 className="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h1>
        <text className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400 block overflow-hidden break-words max-h-24 text-ellipsis">
          {description}
        </text>

        <div className="flex justify-between lg:justify-around items-center pt-1 px-2">
          <a href={liveSite} target="_blank">
            <BsGlobe className="text-gray-400 hover:text-white hover:cursor-pointer text-2xl" />
          </a>
          <a href={github} target="_blank">
            <GrGithub className="text-gray-400 hover:text-white hover:cursor-pointer text-3xl" />
          </a>
          <ReadMoreButton />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
