import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';
import ThemeContext from './ThemeContext';
import './PresentationText.css';


const PresentationText = () => {

	const { language } = useContext(LanguageContext);
	const { theme } = useContext(ThemeContext);

	const text = language === 'en' ?
		"Explore my web projects demonstrating skills and expertise."
		:
		"Explora mis proyectos web que muestran habilidades y experiencia."

	return (
		<div
			className='PresentationText row'
			style={{
				color: theme === 'dark' ? '#ffffff' : '#001141'
			}}
		>
			<div className="portfolio-heading row m-0 p-0">
				<h1 className=' mt-1 mb-2 fs-1 fs-xl-5 imb-plex-sans-bold text-center'>Portfolio</h1>
			</div>

			<p className='text-center mb-4 fs-2 ibn-plex regular col-11 mx-auto'>
				{text}
			</p>

		</div>
	);
};

export default PresentationText;






