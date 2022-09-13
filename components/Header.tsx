import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import r7 from "../assets/logo/r7.svg";

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
    { title: "About", path: "me" },
  ];

  return (
    <div className="font-inter px-3 border-b-violet-400 shadow-md border-b-2 h-12 py-4 flex items-center justify-between mb-1">
      <div className="relative h-8 w-8">
        <Image src={r7} objectFit="contain" layout="fill" />
      </div>
      <section className="flex items-center justify-evenly space-x-5">
        {navItems.map((item, idx) => {
          return (
            <Link key={idx} href={`/${item.path}`}>
              <a
                className={`nav-item ${
                  path === item.path ? "text-violet-700" : ""
                }`}
              >
                {item.title}
              </a>
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default Header;
