import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import LanguageContext from "./LanguageContext";

const ButtonTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const darkThemeIcon = "/images/Black Dark Theme Icon.svg";
  const lightThemeIcon = "/images/White Light Theme Icon.svg";
  const currentIcon = theme === "light" ? darkThemeIcon : lightThemeIcon;

  return (
    <button className="" onClick={toggleTheme}>
      <img src={currentIcon} alt="Theme Icon" />
    </button>
  );
};

export default ButtonTheme;
