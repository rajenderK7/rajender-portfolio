import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "./Button";

const Header = () => {
  const [path, setPath] = useState("");
  const router = useRouter();
  const currentPath = router.pathname;

  useEffect(() => {
    setPath(currentPath.replace("/", ""));
  }, [currentPath]);

  const navItems = [
    { title: "Home", path: "" },
    { title: "Projects", path: "projects" },
    { title: "Blog", path: "blog" },
    { title: "About", path: "about" },
  ];

  const navOnClick = (path: string) => {
    router.push(`/${path}`);
  };

  return (
    <div className="px-3 border-b-gray-200 border-b-2 h-12 py-4 flex items-center justify-between mb-3">
      <img
        src="https://icon2.cleanpng.com/20180609/ryh/kisspng-firebase-cloud-messaging-google-cloud-messaging-api-as-a-service-5b1bf782ac0ca2.2103995315285594907047.jpg"
        alt="Test"
        height="30px"
        width="30px"
      />
      <section className="flex items-center justify-evenly space-x-5">
        {navItems.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`nav-item ${
                path === item.path ? "text-purple-600" : ""
              }`}
              onClick={() => navOnClick(item.path)}
            >
              {item.title}
            </div>
          );
        })}
        {/* <Button title="Resume" className="text-md" onClick={() => {}} /> */}
      </section>
    </div>
  );
};

export default Header;
