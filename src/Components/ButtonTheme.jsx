import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ButtonTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const darkThemeIcon = "images/Black Dark Theme Icon.svg";
  const lightThemeIcon = "images/White Light Theme Icon.svg";
  const currentIcon = theme === "light" ? darkThemeIcon : lightThemeIcon;

  return (
    <button
      onTouchEnd={(e) => e.currentTarget.blur()}
      className="active:bg-blue-30 md:hover:bg-blue-30 dark:md:hover:bg-blue-70 dark:active:bg-blue-70 rounded-full p-1.5 animate-shine transition-all"
      style={{ animationDelay: "1.5s" }}
      onClick={toggleTheme}
    >
      <img src={currentIcon} alt="Theme Icon" />
    </button>
  );
};

export default ButtonTheme;
