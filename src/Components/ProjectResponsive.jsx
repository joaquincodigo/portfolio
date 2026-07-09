import React, { useContext } from "react";
import useIsMobile from "../hooks/useIsMobile";

import LanguageContext from "./LanguageContext";

import ProjectEntry from "./ProjectEntry";

const ProjectResponsive = () => {
  const { language } = useContext(LanguageContext);

  const isMobile = useIsMobile(); // Very narrow mobile (490 or less px)
  const title = language === "en" ? "Responsive design" : "Diseño adaptable";

  const text =
    language === "en"
      ? "Explore how the website adapts to different screen sizes, from mobile devices to desktop screens"
      : "Explora como el sitio web se adapta a diferentes tamaños de pantalla, desde dispositivos móviles hasta pantallas de escritorio";

  const image = isMobile
    ? "images/ResponsiveProjectPhotoSquare.gif"
    : "images/ResponsiveProjectPhoto.gif";

  const link = "https://responsive-web-design-lac.vercel.app/";
  const tags = [
    "Responsive",
    "AI Assets",
    "NextJS",
    "Tailwind",
  ];

  return (
    <div className="ProjectResponsive">
      <ProjectEntry
        title={title}
        text={text}
        image={image}
        link={link}
        tags={tags}
        cropOnMobile={true}
      />
    </div>
  );
};

export default ProjectResponsive;