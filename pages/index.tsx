import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Interests from "../components/Interests";
import Intro from "../components/Intro";
import QuickNav from "../components/QuickNav";
import SocailMediaMobile from "../components/SocailMediaMobile";
import Tech from "../components/Tech";
import { sanityClient } from "../sanity";

type QuickLink = {
  resumeURL: string;
};

const MoreAbout = () => {
  return (
    <div className="font-inter text-center my-3 lg:mt-0">
      <Link href="/me">
        <a>
          More about <span className="text-blue-700">me</span>
        </a>
      </Link>
    </div>
  );
};

const Home: NextPage = ({
  resumeURL,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="dark:text-gray-300">
      <Intro />
      <QuickNav resumeURL={resumeURL} />
      <Tech />
      <Interests />
      <SocailMediaMobile onlyMobile />
      <MoreAbout />
      <Footer />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const query = `*[_type == "myFiles" && title == "Katkuri Rajender Resume"][0] {
    "resumeURL": resume.asset->url,
  }`;

  const resumeURL: QuickLink = (await sanityClient.fetch(query)).resumeURL;

  return {
    props: {
      resumeURL,
    },
  };
};
