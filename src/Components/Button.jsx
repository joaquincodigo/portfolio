import React from "react";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Button = ({ text, icon, onClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="w-full px-6">
      <button
        onClick={onClick}
        className="Button bg-blue-90 dark:bg-blue-70 rounded-full block mx-auto py-1.5 mb-3 w-full max-w-[344px] sm:w-[344px]"
      >
        <div className="flex justify-center items-center">
          <img className="me-3 w-10" src={icon} alt="Contact" />
          <span className="text-white text-center font-semibold font-size text-xl">
            {text}
          </span>
        </div>
      </button>
    </div>
  );
};

export default Button;
