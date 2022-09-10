import React from "react";

const Intro = () => {
  return (
    <section className="w-full p-2 rounded-md">
      <div className="flex-col items-center justify-center">
        <h1 className="font-mono text-[28px] lg:text-[50px] mb-[-15px] lg:mb-[-30px]">
          Hi, I'm
        </h1>
        <h1 className="font-semibold text-[50px] lg:text-[80px] font-mono text-purple-600">
          Rajender
        </h1>
        <p className="text-lg">
          I'm a web and self-taught mobile application developer. I build mobile
          apps for easing out student life.
        </p>
      </div>
    </section>
  );
};

export default Intro;
