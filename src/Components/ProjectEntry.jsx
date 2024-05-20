import React from 'react';

const ProjectEntry = ({ title, text, image }) => {

	return (
		<div className='ProjectEntry'>
			<h2>{title}</h2>
			<p>{text}</p>
			<img src="{image}" alt="Project Image" />
		</div>
	);
};

export default ProjectEntry;
