import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';
import ThemeContext from './ThemeContext';

const PresentationText = () => {

	const { language } = useContext(LanguageContext);
	const { theme } = useContext(ThemeContext);

	const text = language === 'en' ?
		"Explore my work and projects showcasing my skills and expertise in web development."
		:
		"Explora mi trabajo y proyectos que muestran mis habilidades y experiencia en desarrollo web."

	return (
		<div className='bg-secondary row'>

			<h1 className='text-center fs-1 imb-plex-sans-bold'>
				Portfolio
			</h1>

			<p className='text-center fs-2 ibn-plex regular'>
				{text}
			</p>
		</div>
	);
};

export default PresentationText;






