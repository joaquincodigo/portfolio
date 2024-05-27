import React, { useContext } from 'react';

import LanguageContext from './LanguageContext';

import Button from './Button'


const ButtonContact = () => {

	const { language } = useContext(LanguageContext);

	const text = language === 'en' ? "Contact Me" : "Contáctame"
	const contactIcon = '/images/ContactIconWhite.svg'

	return (
		<div className='ButtonContact mb-2'>
			<Button className="btn-light" text={text} icon={contactIcon} />
		</div>
	);
};

export default ButtonContact;
