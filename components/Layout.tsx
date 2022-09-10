import React from "react";
import JSXProps from "../interfaces/JSXProps";

const Layout = ({ children }: JSXProps) => {
  return <div className="lg:max-w-5xl lg:mx-auto">{children}</div>;
};

export default Layout;
