import React, { useContext } from "react";

import LanguageContext from "./LanguageContext";

import Button from "./Button";

const ButtonContact = ({ onClick }) => {
  const { language } = useContext(LanguageContext);

  const text = language === "en" ? "Contact Me" : "Contáctame";
  const contactIcon = "images/ContactIconWhite.svg";

  return (
    <div className="Button">
      <Button onClick={onClick} text={text} icon={contactIcon} />
    </div>
  );
};

export default ButtonContact;
