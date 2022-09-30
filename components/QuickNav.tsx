import { useRouter } from "next/router";
import Card from "./Card";
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

  const navItemCSS =
    "lg:p-4 lg:w-80 mx-2 border-none shadow-none lg:shadow-neu1 lg:shadow-neu2 lg:dark:shadow-darkneu1 lg:dark:shadow-darkneu2";

  return (
    <div className="mx-3 mb-4 lg:m-0">
      <SectionHeading title="Explore" />
      <Card className="mt-3 border-none shadow-neu1 shadow-neu2 dark:shadow-darkneu1 dark:shadow-darkneu2 lg:shadow-none lg:dark:shadow-none">
        <section className="px-1 py-2 font-inter flex flex-col lg:grid grid-flow-col">
          <Card className={navItemCSS}>
            <QuickNavItem
              title="Checkout my projects. I ❤️ to build mobile and web apps."
              buttonTitle="Projects"
              onClick={projectsOnClick}
            />
          </Card>
          <Card className={navItemCSS}>
            <QuickNavItem
              title="My Resume. Looking for a software development internship."
              buttonTitle="Resume"
              url={resumeURL}
              download
            />
          </Card>
          <Card className={navItemCSS}>
            <QuickNavItem
              title="Want to have a highly confidential chat? Mail me."
              buttonTitle="Mail"
            />
          </Card>
        </section>
      </Card>
    </div>
  );
};

export default QuickNav;
