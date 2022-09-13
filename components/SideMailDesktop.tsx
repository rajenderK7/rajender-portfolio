import React from "react";

const SideMailDesktop = () => {
  return (
    <div>
      <div className="hidden lg:block fixed right-[100px] bottom-0">
        <section className="flex flex-col items-center space-y-4">
          <div className="block rounded-lg w-0.5 h-32 bg-violet-600"></div>
          <a className="rotate-90" href={"mailto:rajenderkatkuri123@gmail.com"}>
            rajenderkatkuri123@gmail.com
          </a>
        </section>
      </div>
    </div>
  );
};

export default SideMailDesktop;
