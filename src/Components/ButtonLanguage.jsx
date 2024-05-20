import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';
import ThemeContext from './ThemeContext';

const ButtonLanguage = () => {
	const { language, toggleLanguage } = useContext(LanguageContext);
	const { theme } = useContext(LanguageContext);

	return (
		<button className="btn btn-primary rounded-circle" onClick={toggleLanguage}>
			L
		</button>
	);
};

export default ButtonLanguage;
