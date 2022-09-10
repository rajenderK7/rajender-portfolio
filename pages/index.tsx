import type { NextPage } from "next";
import Footer from "../components/Footer";
import Interests from "../components/Interests";
import Intro from "../components/Intro";
import Tech from "../components/Tech";

const Home: NextPage = () => {
  return (
    <>
      <Intro />
      <Interests />
      <Tech />
      <Footer />
    </>
  );
};

export default Home;
