import React, { useContext } from 'react';

import ThemeContext from './ThemeContext';

const TopBar = ({ children }) => {
	const { theme } = useContext(ThemeContext);

	return (
		<nav class="TopBar navbar navbar-light bg-light">
			<a class="navbar-brand" href="#">
				Joaquin.Codigo
			</a>
			{children}
		</nav>
	);

};

export default TopBar;
