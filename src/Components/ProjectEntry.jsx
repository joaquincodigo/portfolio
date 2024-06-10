import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import LanguageContext from "./LanguageContext";

const ProjectEntry = ({ title, text, image, link }) => {
  const dummyImage = "/images/dummyProjectImage.png";
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const buttonText = language === "en" ? "See" : "Ver";

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="ProjectEntry mb-6 p-6 rounded-3xl shadow-md shadow-blue-30 dark:shadow-blue-90 dark:border dark:border-blue-70 text-blue-100 dark:text-blue-10 bg-white dark:bg-blue-90 max-w-[463px] mx-auto hover:ring-1 ring-blue-80 dark:ring-blue-50">
        {/* TITLE */}
        <h3 className=" text-2xl font-bold mb-6">{title}</h3>

        {/* TEXT */}
        <p className="text-xl mb-6">{text}</p>

        {/* IMAGE */}
        <img className="rounded-md mb-6" src={image} alt="Project Preview" />
      </div>
    </a>
  );
};

export default ProjectEntry;
