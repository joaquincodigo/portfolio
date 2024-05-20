import React, { useContext } from 'react';

import LanguageContext from './LanguageContext';
import ThemeContext from './ThemeContext';

import ProjectEntry from './ProjectEntry'


const ProjectJap = () => {

	const { language } = useContext(LanguageContext);
	const { theme } = useContext(ThemeContext);

	const title = language === 'en' ? "JAP TITLE" : "TITULO DE JAP"
	const text = language === 'en' ? "JAP Text blablabla." : "Texto de JAP blablabla."
	const image = "an image goes here"

	return (
		<div className='ProjectJap'>
			<ProjectEntry title={title} text={text} image={image} />
		</div>
	);
};

export default ProjectJap;