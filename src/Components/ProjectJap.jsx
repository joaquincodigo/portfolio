import React, { useContext } from 'react';

import LanguageContext from './LanguageContext';
import ThemeContext from './ThemeContext';

import ProjectEntry from './ProjectEntry'


const ProjectJap = () => {

	const { language } = useContext(LanguageContext);
	const { theme } = useContext(ThemeContext);

	const title = language === 'en' ? "JAP eComerce Site" : "JAP Sitio eComerce"
	const text = language === 'en' ?
		"This project is part of my first year in Jóvenes a Programar. I designed and developed an e-commerce website inspired by MercadoLibre, using JavaScript, HTML, and CSS. Every section, CSS style, and logic were implemented entirely from scratch."
		:
		"Este proyecto forma parte de mi primer año en 'Jóvenes a Programar'. Diseñé y desarrollé un sitio de comercio inspirado en MercadoLibre, utilizando JavaScript, HTML y CSS puro. Cada sección, estilo CSS y lógica fueron implementados completamente desde cero."
	const image = "images/JapProjectPhoto.bmp"
	const link = "https://ripnephils.github.io/JoaquinOrtiz/"

	return (
		<div className='ProjectJap'>
			<ProjectEntry title={title} text={text} image={image} link={link} />
		</div>
	);
};

export default ProjectJap;