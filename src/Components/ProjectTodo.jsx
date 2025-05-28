import React, { useContext } from "react";

import LanguageContext from "./LanguageContext";
import ThemeContext from "./ThemeContext";

import ProjectEntry from "./ProjectEntry";

const ProjectTodo = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const title = language === "en" ? "Simple Tasker" : "Gestor de Tareas Simple";

  const text =
    language === "en"
      ? "A simple and fast tasker app, designed to quickly add and filter tasks. Perfect for planning your day without complications or distractions."
      : "Una app de tareas simple y rápida, diseñada para agregar y filtrar tareas al instante. Perfecta para planificar tu día sin complicaciones ni distracciones.";

  const image = "images/TodoProjectPhoto.gif";
  const link = "https://joaquincodigo.github.io/simpletodo/";
  const tags = ["NextJS", "LocalStorage", "Tailwind", "GitHub Workflows"] 

  return (
    <div className="ProjectPokemon">
      <ProjectEntry title={title} text={text} image={image} link={link} tags={tags} />
    </div>
  );
};

export default ProjectTodo;
