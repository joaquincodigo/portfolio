import React from "react";

const TopBar = ({ children }) => {
  return (
    <nav
      className="TopBar py-1.5 shadow-sm backdrop-blur bg-[linear-gradient(60deg,rgba(166,200,255,0.3),rgba(120,169,255,0.3),rgba(208,226,255,0.4))] dark:bg-[linear-gradient(60deg,rgba(0,67,206,0.7),rgba(15,98,254,0.7),rgba(0,45,156,0.5))] text-blue-90 dark:shadow-md dark:shadow-blue-70 dark:text-cool-gray-10 fixed top-0 left-0 w-full flex items-center justify-between px-3"
    >
      <div className="flex flex-row items-center">
        <p className="font-bold text-lg rounded-full me-2">⬗ </p>
        <p className="text-lg md:text-base">
          joaquín
          <span className="font-bold">.código</span>
        </p>
      </div>

      <div className="">{children}</div>
    </nav>
  );
};

export default TopBar;
