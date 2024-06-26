import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import LanguageContext from './LanguageContext';

const ProjectEntry = ({ title, text, image, link }) => {
	const dummyImage = '/images/dummyProjectImage.png';
	const { theme } = useContext(ThemeContext);
	const { language } = useContext(LanguageContext);

	const buttonText = language === 'en' ? 'See' : 'Ver'

	return (
		<div
			className='ProjectEntry mb-4 mx-auto p-3 col-11 rounded-4'
			style={{
				backgroundColor: theme === 'light' ? '#ffffff' : '#001141',
				boxShadow: '0px 0px 5px 2px rgba(0, 17, 65, 0.08)'
			}}
		>
			{/* TITLE */}
			< h3 className='mb-3 fs-2' > {title}</h3 >

			{/* DESCRIPTION */}
			< p className='fs-4 mb-3' > {text}</p >

			{/* IMAGE */}
			< img className="mb-2 col-12 rounded" src={image} alt="Project Preview" />

			{/* BUTTON */}
			<a href={link} target="_blank" rel="noopener noreferrer">
				<button
					className='btn rounded-pill col-5 offset-7 mt-3 mb-2 fs-4 ibm-plex-sans-semibold'
					style={{
						backgroundColor: theme === 'light' ? '#001d6c' : '#9ef0f0',
						color: theme === 'light' ? '#ffffff' : '#ffffff',
					}}
				>
					{buttonText}
				</button>
			</a>

		</div >
	);
};

export default ProjectEntry;
