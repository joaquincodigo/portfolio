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
            <div className="flex items-center">
              <ButtonLanguage />
              <ButtonTheme />
            </div>
          </TopBar>
          <ProfilePhoto />
          <PresentationText />
          <div className="flex flex-col md:flex-row md:space-x-4 md:justify-center">
            <ButtonContact onClick={handleContactButtonClick} />
            <ContactInfo isContactInfoHidden={isContactInfoHidden} />
            <ButtonResume />
          </div>
          <div className="flex flex-col md:flex-row md:flex-wrap md:space-x-4 justify-center">
            <ProjectJap />
            <ProjectPokemon />
          </div>
        </ThemeProvider>
      </LanguageProvider>
    </div>
  );
}

export default App;
