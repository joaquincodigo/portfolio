import React from 'react';
import { useContext } from 'react';
import ThemeContext from './ThemeContext';


const Button = ({ text, icon }) => {

	const { theme } = useContext(ThemeContext)

	const buttonTheme = theme === 'light' ? 'btn-light' : 'btn-dark'

	return (
		<div className='row'>
			<button className={`btn btn-lg rounded-pill col-10 mx-auto mb-3 ${buttonTheme}`}>
				<span>{icon}</span>
				<span className='ibm-plex-sans-semibold'>{text}</span>
			</button>
		</div>
	);
};

export default Button;

