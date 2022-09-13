import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { sanityClient } from "../sanity";
import QuickNavItem from "./QuickNavItem";
import SectionHeading from "./SectionHeading";
import { groq } from "next-sanity";

const QuickNav = () => {
  const router = useRouter();
  const projectsOnClick = () => {
    router.push("/projects");
  };

  const [resumeURL, setResumeURL] = useState("");

  const downloadResume = async () => {
    const query = groq`*[_type == "myFiles" && title == "Katkuri Rajender Resume"][0] {
      "downloadURL": resume.asset->url,
    }`;

    const data = await sanityClient.fetch(query);
    setResumeURL(data.downloadURL);
  };

  useEffect(() => {
    downloadResume();
  }, []);

  return (
    <div className="mt-3 pt-2 pb-3 bg-gradient-to-r from-violet-500 to-pink-500">
      <SectionHeading title="Explore 🪐" className="text-white" />
      <section className="font-inter mt-1 mx-auto flex flex-col lg:items-center lg:max-w-xl ">
        <QuickNavItem
          title="Checkout my projects. I ❤️ to build mobile and web apps."
          buttonTitle="Projects"
          onClick={projectsOnClick}
        />
        <QuickNavItem
          title="Checkout my Resume. Beginner 😂🤫"
          buttonTitle="Resume"
          url={resumeURL}
          download
        />
        <QuickNavItem
          title="Want to have a highly confidential chat? 🤑"
          buttonTitle="Mail"
        />
      </section>
    </div>
  );
};

export default QuickNav;
