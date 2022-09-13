import React from "react";
import { Github, Instagram, Linkedin, Mail } from "./SocialLinks";

const SocialMediaDesktop = () => {
  return (
    <div className="hidden xl:block fixed left-[100px] bottom-0">
      <section className="flex flex-col items-center space-y-4 text-3xl">
        <Mail />
        <Linkedin />
        <Github />
        <Instagram />
        <div className="block rounded-lg left-1/2 bottom-0 w-0.5 h-32 bg-violet-600"></div>
      </section>
    </div>
  );
};

export default SocialMediaDesktop;
