import React, { useContext } from 'react';

import LanguageContext from './LanguageContext';
import ThemeContext from './ThemeContext';

import ProjectEntry from './ProjectEntry'


const ProjectJap = () => {

	const { language } = useContext(LanguageContext);
	const { theme } = useContext(ThemeContext);

	const title = language === 'en' ? "eComerce Site" : "Sitio eComerce"
	const text = language === 'en' ? "A 7 weeks project using only vanilla HTML, JS and CSS" : "Texto de JAP blablabla."
	const image = "an image goes here"

	return (
		<div className='ProjectJap'>
			<ProjectEntry title={title} text={text} image={image} />
		</div>
	);
};

export default ProjectJap;