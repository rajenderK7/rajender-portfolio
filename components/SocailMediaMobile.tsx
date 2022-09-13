import React from "react";
import { Github, Instagram, Linkedin, Mail } from "./SocialLinks";

interface Props {
  onlyMobile: boolean;
}

const SocailMediaMobile = ({ onlyMobile }: Props) => {
  return (
    <section
      className={`my-4 ${
        onlyMobile ? "lg:hidden" : ""
      } flex items-center justify-evenly text-3xl`}
    >
      <Mail />
      <Linkedin />
      <Github />
      <Instagram />
    </section>
  );
};

export default SocailMediaMobile;
