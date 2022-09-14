import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
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

const Home: NextPage = ({
  resumeURL,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Intro />
      <QuickNav resumeURL={resumeURL} />
      <Tech />
      <Interests />
      <SocailMediaMobile onlyMobile />
      <Footer />
    </>
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
