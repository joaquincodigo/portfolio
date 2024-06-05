import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import LanguageContext from "./LanguageContext";

const ProjectEntry = ({ title, text, image, link }) => {
  const dummyImage = "/images/dummyProjectImage.png";
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const buttonText = language === "en" ? "See" : "Ver";

  return (
    <div className="ProjectEntry mb-6 p-6 rounded-3xl shadow-md shadow-blue-30 dark:shadow-none dark:border dark:border-blue-70 text-blue-100 dark:text-blue-10 bg-white dark:bg-blue-100">
      {/* TITLE */}
      <h3 className=" text-2xl font-bold mb-6">{title}</h3>

      {/* TEXT */}
      <p className="text-xl mb-6">{text}</p>

      {/* IMAGE */}
      <img className="rounded-md mb-6" src={image} alt="Project Preview" />

      {/* BUTTON */}
      <div className="flex justify-end">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-90 dark:bg-blue-70 font-semibold text-white rounded-full w-36 h-12 text-lg ">
            {buttonText}
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectEntry;
