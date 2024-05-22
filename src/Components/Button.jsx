import React from 'react';


const Button = ({ text, icon }) => {
	return (
		<div className='row'>
			<button className='btn btn-info rounded-pill col-10 mx-auto mb-3'>
				<span>{icon}</span> {text}
			</button>
		</div>
	);
};

export default Button;

