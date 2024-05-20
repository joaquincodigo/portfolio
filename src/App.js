import React, { useContext } from 'react';
import './App.css';

import { LanguageProvider } from './Components/LanguageContext';
import { ThemeProvider } from './Components/ThemeContext';

import ProfilePhoto from './Components/ProfilePhoto'
import PresentationText from './Components/PresentationText'
import ButtonContact from './Components/ButtonContact';
import ButtonLanguage from './Components/ButtonLanguage';
import ButtonTheme from './Components/ButtonTheme';
import ButtonResume from './Components/ButtonResume';
import ProjectEntry from './Components/ProjectEntry';

function App() {

  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="App container-fluid">
          <ButtonLanguage />
          <ButtonTheme />
          <ProfilePhoto />
          <PresentationText />
          <ButtonContact />
          <ButtonResume />
          <ProjectEntry title="Im a Project!" text='Lorem ipsum etc etc etc etc etc etc etc' image="hello" />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
