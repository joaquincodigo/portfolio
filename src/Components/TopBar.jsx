import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const TopBar = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className="">
      <div className="">
        <p className="">
          joaquín <span className="">.código</span>
        </p>
      </div>

      <div>{children}</div>
    </nav>
  );
};

export default TopBar;
