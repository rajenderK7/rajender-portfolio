import React from "react";

const Intro = () => {
  return (
    <section className="mb-2 w-full p-2 rounded-md">
      <div className="flex-col items-center justify-center">
        <h1 className="text-black dark:text-white font-medium font-roboto text-[28px] lg:text-[40px] mb-[-15px] lg:mb-[-30px]">
          Hi, I'm
        </h1>
        <div className="text-[50px] ml-[-3px] lg:ml-0  lg:text-[80px] font-bold font-inter">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Rajender<span className="text-black dark:text-white">.</span>
          </span>
        </div>
        <p className="text-base font-inter lg:text-lg">
          <strong className="text-black dark:text-white">Web</strong> and
          self-taught{" "}
          <strong className="text-black dark:text-white">Mobile</strong>{" "}
          application developer.
        </p>
      </div>
    </section>
  );
};

export default Intro;
