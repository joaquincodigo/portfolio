import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ButtonTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const darkThemeIcon = "/images/Black Dark Theme Icon.svg";
  const lightThemeIcon = "/images/White Light Theme Icon.svg";
  const currentIcon = theme === "light" ? darkThemeIcon : lightThemeIcon;

  return (
    <button
      className="hover:bg-blue-20 dark:hover:bg-blue-70 rounded-full p-1.5"
      onClick={toggleTheme}
    >
      <img src={currentIcon} alt="Theme Icon" />
    </button>
  );
};

export default ButtonTheme;
