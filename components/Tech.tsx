import React from "react";
import SectionHeading from "./SectionHeading";
import ReactLogo from "../assets/logo/react.svg";
import FlutterLogo from "../assets/logo/flutter.svg";
import FirebaseLogo from "../assets/logo/firebase.svg";
import MongoDBLogo from "../assets/logo/mongodb.svg";
import ReduxLogo from "../assets/logo/redux.svg";
import DjangoLogo from "../assets/logo/django.svg";
import NextJSLogo from "../assets/logo/nextjs.svg";
import TechLogo from "./TechLogo";

const Tech = () => {
  return (
    <div className="mt-3">
      <SectionHeading title="Technologies 🔧" />
      <section className="flex flex-wrap lg:mx-0 lg:justify-center">
        <TechLogo image={FlutterLogo} />
        <TechLogo image={NextJSLogo} />
        <TechLogo image={ReactLogo} />
        <TechLogo image={FirebaseLogo} />
        <TechLogo image={MongoDBLogo} />
        <TechLogo image={ReduxLogo} />
        <TechLogo image={DjangoLogo} />
      </section>
    </div>
  );
};

export default Tech;
