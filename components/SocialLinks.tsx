import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const socialLinks = {
  mail: "mailto:rajenderkatkuri123@gmail.com",
  linkedIn: "https://www.linkedin.com/in/rajender-katkuri-90865421b/",
  github: "https://www.github.com/rajenderK7",
};

export const Mail = () => {
  return (
    <a className="social-link text-[#f32420]" href={socialLinks["mail"]}>
      <IoMdMail />
    </a>
  );
};

export const Linkedin = () => {
  return (
    <a
      className="social-link text-[#0A66C2]"
      href={socialLinks["linkedIn"]}
      target="_blank"
    >
      <FaLinkedin />
    </a>
  );
};

export const Github = () => {
  return (
    <a
      className="social-link dark:text-[#fbfbfb]"
      href={socialLinks["github"]}
      target="_blank"
    >
      <GrGithub />
    </a>
  );
};
