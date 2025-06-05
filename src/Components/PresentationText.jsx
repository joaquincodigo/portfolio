import React, { useContext } from "react";
import LanguageContext from "./LanguageContext";
import ThemeContext from "./ThemeContext";

const PresentationText = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const presentationTitle =
    language === "en"
      ? "Hello! This is my porfolio"
      : "¡Hola! este es mi porfolio";

  const presentationText =
    language === "en"
      ? "Here you'll find web projects I've worked on and learned from."
      : "Aquí encontrarás proyectos web en los que he trabajado y aprendido.";

  return (
    <div className="PresentationText mb-9 w-full">
      <div className="">
        <h1 className="text-3xl md:text-2xl font-bold text-center mt-5 mb-2 text-blue-90 dark:text-blue-10">
          {presentationTitle}
        </h1>
      </div>

      <p className="text-center text-2xl md:text-xl mx-6 text-blue-90 dark:text-white">
        {presentationText}
      </p>
    </div>
  );
};

export default PresentationText;
