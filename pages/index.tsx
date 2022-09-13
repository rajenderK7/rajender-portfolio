import type { NextPage } from "next";
import Footer from "../components/Footer";
import Interests from "../components/Interests";
import Intro from "../components/Intro";
import QuickNav from "../components/QuickNav";
import SocailMediaMobile from "../components/SocailMediaMobile";
import Tech from "../components/Tech";

const Home: NextPage = () => {
  return (
    <>
      <Intro />
      <QuickNav />
      <Tech />
      <Interests />
      <SocailMediaMobile onlyMobile />
      <Footer />
    </>
  );
};

export default Home;
