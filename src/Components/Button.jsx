import React from "react";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Button = ({ text, icon, onClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="w-full px-6 md:px-0">
      <button
        onClick={onClick}
        className="Button md:max-w-52 bg-blue-90 dark:bg-blue-70 rounded-full block mx-auto py-1.5 mb-3 w-full max-w-[344px] sm:w-[344px] md:mx-0"
      >
        <div className="flex justify-center items-center">
          <img className="me-3 w-6" src={icon} alt="Contact" />
          <span className="text-white text-center font-semibold text-base md:text-sm">
            {text}
          </span>
        </div>
      </button>
    </div>
  );
};

export default Button;
