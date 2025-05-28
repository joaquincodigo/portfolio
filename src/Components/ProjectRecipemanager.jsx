import React, { useContext } from "react";

import LanguageContext from "./LanguageContext";
import ThemeContext from "./ThemeContext";

import ProjectEntry from "./ProjectEntry";

const ProjectRecipemanager = () => {
  const { language } = useContext(LanguageContext);

  const title = language === "en" ? "Recipe Haven" : "Rincón de Recetas";

  const text =
    language === "en"
      ? "Create your own recipes and share them with the world. Like and save your favorites from others. Get cooking!"
      : "Crea tus propias recetas y compártelas con el mundo. Dale \"me gusta\" y guarda tus recetas favoritas de otros usuarios. ¡A cocinar!";

  const image = "images/RecipemanagerPhoto.gif";
  const link = "https://recipemanager-w4dh.vercel.app/create-recipe";
  const tags = ["NextJS", "SupaBase", "Authentification", "Vercel", "Back-end", "Tailwind"] 

  return (
    <div className="ProjectPokemon">
      <ProjectEntry title={title} text={text} image={image} link={link} tags={tags} />
    </div>
  );
};

export default ProjectRecipemanager;
