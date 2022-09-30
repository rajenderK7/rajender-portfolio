import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// import r7 from "../assets/logo/r7.svg";
import { useTheme } from "next-themes";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Header = () => {
  const { theme, setTheme } = useTheme();
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

  const themeButton =
    theme === "dark" ? (
      <MdLightMode className="text-yellow-500" />
    ) : (
      <MdDarkMode className="text-violet-700" />
    );

  return (
    <div className="font-inter px-3 border-b-violet-400 shadow border-b h-12 py-4 flex items-center justify-between">
      {/* <Link href="/">
        <div className="cursor-pointer relative h-6 w-6 lg:h-8:w-8">
          <Image src={r7} objectFit="contain" layout="fill" />
        </div>
      </Link> */}

      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="lg:text-3xl text-2xl order-2 md:order-3 text-black"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {themeButton}
      </button>
      <section className="flex items-center justify-evenly space-x-5">
        {navItems.map((item, idx) => {
          return (
            <Link key={idx} href={`/${item.path}`}>
              <a
                className={`nav-item ${
                  path === item.path
                    ? "text-violet-500 dark:text-violet-500"
                    : ""
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
