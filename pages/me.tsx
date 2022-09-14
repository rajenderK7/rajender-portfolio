import Image from "next/image";
import React from "react";
import rajenderImage from "../assets/images/rajender.png";
import SocailMediaMobile from "../components/SocailMediaMobile";

interface AboutHeaderProps {
  title: string;
}

const AboutHeader = ({ title }: AboutHeaderProps) => {
  return (
    <h1 className="my-2 font-inter text-lg font-semibold text-center text-gray-500">
      {title}
    </h1>
  );
};

const Me = () => {
  const myName: string = "Katkuri Rajender";
  const myDescription: string =
    "I'm a computer science undergrad from Hyderabad. I'm a web and self-taught mobile application developer.";

  return (
    <div className="m-3 px-2 pt-2 font-inter">
      <div className="relative h-28 w-28 mx-auto mt-3">
        <Image
          src={rajenderImage}
          objectFit="cover"
          layout="fill"
          className="rounded-full"
        />
      </div>
      <h1 className="my-2 font-inter text-2xl font-bold text-center">
        {myName}
      </h1>
      <section className="lg:text-center">
        <p>{myDescription}</p>
        <p className="mt-3">
          I love building apps and I ocassionally write articles on the tech I
          worked, to help beginners understand it better.
        </p>
      </section>
      <section>
        <AboutHeader title="Experience" />
        <div className="block p-3 max-w-sm mx-auto rounded-lg border shadow-md bg-gray-800 border-gray-700 hover:bg-gray-700">
          <h5 className="mb-2 text-lg font-inter font-semibold tracking-tight text-white">
            Fosterate
          </h5>
          <p className="font-normal text-gray-400">Flutter Developer Intern</p>
        </div>
      </section>
      <section className="my-3">
        <AboutHeader title="Connect with me 👇" />
        <div className="max-w-sm mx-auto">
          <SocailMediaMobile onlyMobile={false} />
        </div>
      </section>
    </div>
  );
};

export default Me;
