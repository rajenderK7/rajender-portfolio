import Image from "next/image";
import React from "react";
import NextJSLogo from "../assets/logo/nextjs.svg";
import SanityLogo from "../assets/logo/sanity.png";

const Footer = () => {
  return (
    <footer className="mb-2 text-center font-inter text-sm border-t border-t-violet-400 pt-2">
      <p>Designed & Built by Rajender Katkuri</p>
      <div className="flex items-center justify-center">
        <div className="mr-2">with</div>
        <Image src={NextJSLogo} height="30px" width="30px" />
        <Image src={SanityLogo} height="30px" width="30px" className="ml-2" />
      </div>
    </footer>
  );
};

export default Footer;
