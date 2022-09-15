import { useRouter } from "next/router";
import QuickNavItem from "./QuickNavItem";
import SectionHeading from "./SectionHeading";

interface QuickLink {
  resumeURL: string;
}

const QuickNav = ({ resumeURL }: QuickLink) => {
  const router = useRouter();
  const projectsOnClick = () => {
    router.push("/projects");
  };

  return (
    <div className="mt-3 pt-2 pb-3 bg-gradient-to-r from-violet-500 to-pink-500">
      <SectionHeading title="Explore 🪐" className="text-white" />
      <section className="font-inter mx-auto flex flex-col lg:items-center lg:max-w-xl ">
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
