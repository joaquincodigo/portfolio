import React from 'react';


const Button = ({ text, icon }) => {
	return (
		<div className='row'>
			<button className='btn btn-info'>
				<span>{icon}</span> {text}
			</button>
		</div>
	);
};

export default Button;

