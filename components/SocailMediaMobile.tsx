import React from "react";
import { Github, Linkedin, Mail } from "./SocialLinks";

interface Props {
  onlyMobile: boolean;
}

const SocailMediaMobile = ({ onlyMobile }: Props) => {
  return (
    <section
      className={`mt-6 mb-3 ${
        onlyMobile ? "lg:hidden" : ""
      } flex items-center justify-evenly text-3xl`}
    >
      <Mail />
      <Linkedin />
      <Github />
    </section>
  );
};

export default SocailMediaMobile;
