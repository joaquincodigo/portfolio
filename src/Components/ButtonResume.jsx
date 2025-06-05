import React, { useContext } from "react";
import LanguageContext from "./LanguageContext";
import Button from "./Button";

const ButtonResume = () => {
  const { language } = useContext(LanguageContext);
  const resumeIcon = "images/ResumeIconWhite.svg";
  const text =
    language === "en" ? "Download my CV (EN)" : "Descarga mi CV (ES)";
  const resumeLink =
    language === "en"
      ? "cv/Joaquin Ortiz CV - English.pdf"
      : "cv/Joaquin Ortiz CV - Spanish.pdf";

  return (
    <a href={resumeLink} download>
      <div className="ResumeButton mb-9">
        <Button text={text} icon={resumeIcon} />
      </div>
    </a>
  );
};

export default ButtonResume;
