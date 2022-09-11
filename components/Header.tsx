import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

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
    <div className="font-inter px-3 border-b-violet-400 shadow-md border-b-2 h-12 py-4 flex items-center justify-between mb-1">
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
                path === item.path ? "text-violet-500" : ""
              }`}
              onClick={() => navOnClick(item.path)}
            >
              {item.title}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Header;
