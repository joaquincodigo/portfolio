import React, { useContext } from 'react';

import LanguageContext from './LanguageContext';
import ThemeContext from './ThemeContext';

import Button from './Button'


const ButtonResume = () => {

	const { language } = useContext(LanguageContext);
	const { theme } = useContext(ThemeContext);

	const text = language === 'en' ? "Download my Resume" : "Descarga mi CV"

	return (
		<div className='ButtonResume'>
			<Button text={text} icon="CV-ICON" />
			<p>I have theme: {theme}</p>
		</div>
	);
};

export default ButtonResume;
