import Image from "next/image";
import React from "react";
import NextJSLogo from "../assets/logo/nextjs.svg";

const Footer = () => {
  return (
    <footer className="mt-2 text-center">
      <div className="flex items-center justify-center">
        <div className="mr-2">Built with</div>
        <Image src={NextJSLogo} height="30px" width="30px" />
      </div>
    </footer>
  );
};

export default Footer;
