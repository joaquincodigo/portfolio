import { useState } from "react";

import "./App.css";

import { LanguageProvider } from "./Components/LanguageContext";
import { ThemeProvider } from "./Components/ThemeContext";

import ProfilePhoto from "./Components/ProfilePhoto";
import PresentationText from "./Components/PresentationText";
import ButtonContact from "./Components/ButtonContact";
import ButtonLanguage from "./Components/ButtonLanguage";
import ButtonTheme from "./Components/ButtonTheme";
import ButtonResume from "./Components/ButtonResume";
import ProjectJap from "./Components/ProjectJap";
import ProjectPokemon from "./Components/ProjectPokemon";
import TopBar from "./Components/TopBar";
import ContactInfo from "./Components/ContactInfo";

function App() {
  const [isContactInfoHidden, setIsContactInfoHidden] = useState(true);

  const handleContactButtonClick = () => {
    setIsContactInfoHidden(!isContactInfoHidden);
    console.log(isContactInfoHidden);
  };

  return (
    <div className="App font-ibm-plex-sans px-3 pt-20 bg-blue-10 dark:bg-blue-100">
      <LanguageProvider>
        <ThemeProvider>
          <TopBar>
            <div className="bar-buttons-container flex items-center">
              <ButtonLanguage />
              <ButtonTheme />
            </div>
          </TopBar>
          <ProfilePhoto />
          <PresentationText />
          <ButtonContact onClick={handleContactButtonClick} />
          <ContactInfo isContactInfoHidden={isContactInfoHidden} />
          <ButtonResume />
          <ProjectJap />
          <ProjectPokemon />
        </ThemeProvider>
      </LanguageProvider>
    </div>
  );
}

export default App;
