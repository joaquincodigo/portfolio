import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import LanguageContext from './LanguageContext'

const ButtonLanguage = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const { language } = useContext(LanguageContext);

	let icon;
	if (language === 'en') {
		if (theme === 'light') {
			const icon = "/images/ES Black Icon.svg"
		}
		else {
			const icon = "/images/ES White Icon.svg"
		}
	}
	else {
		if (theme === 'light') {
			const icon = "/images/EN Black Icon.svg"
		}
		else {
			const icon = "/images/EN White Icon.svg"
		}
	}

	return (
		<button className="ButtonTheme btn btn-primary rounded-circle p-0" onClick={toggleTheme}>
			<img src={icon} alt="Language Icon" />
		</button>
	);
};

export default ButtonLanguage;
