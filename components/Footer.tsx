import Image from "next/image";
import React from "react";
import NextJSLogo from "../assets/logo/nextjs.svg";

const Footer = () => {
  return (
    <footer className="my-2 text-center font-inter text-sm">
      <p>Designed & Built by Rajender Katkuri</p>
      <div className="flex items-center justify-center">
        <div className="mr-2">with</div>
        <Image src={NextJSLogo} height="30px" width="30px" />
      </div>
    </footer>
  );
};

export default Footer;
