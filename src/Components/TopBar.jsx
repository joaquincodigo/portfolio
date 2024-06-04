import React, { useContext } from "react";

const TopBar = ({ children }) => {
  return (
    <nav className="TopBar py-1 shadow-sm shadow-blue-40 bg-cool-gray-10 text-blue-90 dark:shadow-sm dark:shadow-blue-70 dark:bg-blue-90 dark:text-cool-gray-10 fixed top-0 left-0 w-full flex items-center justify-between px-3">
      <div className="">
        <p className="text-lg">
          joaquín<span className="font-bold">.código</span>
        </p>
      </div>

      <div className="">{children}</div>
    </nav>
  );
};

export default TopBar;
