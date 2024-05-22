import React from 'react';

const ProjectEntry = ({ title, text, image }) => {

	return (
		<div className='ProjectEntry'>
			<h3 className='mb-4'>{title}</h3>
			<p className='mb-3'>{text}</p>
			{/* <img src="{image}" alt="Project Preview" /> */}
			<p>{image}</p>
		</div>
	);
};

export default ProjectEntry;
