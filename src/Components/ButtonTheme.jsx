import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ButtonLanguage = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<button className="ButtonTheme btn btn-primary rounded-circle p-0" onClick={toggleTheme}>
			<img src="/Images/US.svg" alt="US Icon" />
		</button>
	);
};

export default ButtonLanguage;
