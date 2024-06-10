import React, { useContext } from "react";

import LanguageContext from "./LanguageContext";
import ThemeContext from "./ThemeContext";

import ProjectEntry from "./ProjectEntry";

const ProjectJap = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const image = "images/JapProjectPhoto.gif";
  const link = "https://ripnephils.github.io/JoaquinOrtiz/";
  const title = language === "en" ? "JAP eComerce Site" : "JAP Sitio eComerce";
  const text =
    language === "en"
      ? "This project is part of my first year in Jóvenes a Programar. I designed and developed an e-commerce website inspired by MercadoLibre, where everything was implemented entirely from scratch."
      : "Este proyecto forma parte de mi primer año en 'Jóvenes a Programar'. Diseñé y desarrollé un sitio de comercio inspirado en MercadoLibre, donde todo fue implementado completamente desde cero.";

  return (
    <div className="ProjectJap">
      <ProjectEntry title={title} text={text} image={image} link={link} />
    </div>
  );
};

export default ProjectJap;
