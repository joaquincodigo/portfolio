import React, { useContext } from 'react';

import LanguageContext from './LanguageContext';
import ThemeContext from './ThemeContext';

import Button from './Button'


const ButtonContact = () => {

	const { language } = useContext(LanguageContext);
	const { theme } = useContext(ThemeContext);

	const text = language === 'en' ? "Contact Me" : "Contáctame"

	return (
		<div className='ButtonContact mt-2'>
			<Button className="btn-light" text={text} icon="CON-ICON" />
		</div>
	);
};

export default ButtonContact;
