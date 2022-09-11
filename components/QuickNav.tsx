import { useRouter } from "next/router";
import React from "react";
import QuickNavItem from "./QuickNavItem";
import SectionHeading from "./SectionHeading";

const QuickNav = () => {
  const router = useRouter();
  const projectsOnClick = () => {
    router.push("/projects");
  };

  return (
    <div className="my-3 pt-2 pb-3 bg-gradient-to-r from-cyan-500 to-blue-500">
      <SectionHeading title="Portal 🪐" className="text-white" />
      <section className="mt-1 mx-auto flex flex-col lg:items-center lg:max-w-xl ">
        <QuickNavItem
          title="Checkout my projects. I ❤️ to build mobile and web apps."
          buttonTitle="Projects"
          onClick={projectsOnClick}
        />
        <QuickNavItem
          title="Checkout my Resume. Beginner 😂🤫"
          buttonTitle="Resume"
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
