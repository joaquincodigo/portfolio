import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ButtonLanguage = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<button onClick={toggleTheme}>
			{theme === 'light' ? 'Switch to Dark' : 'Switch To Light'}
		</button>
	);
};

export default ButtonLanguage;
