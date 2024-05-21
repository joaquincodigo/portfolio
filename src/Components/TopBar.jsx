import React, { useContext } from 'react';

import ThemeContext from './ThemeContext';

const TopBar = ({ children }) => {
	const { theme } = useContext(ThemeContext);

	return (
		<nav class="TopBar navbar navbar-light sticky-top bg-light p-2 w-100">
			<a class="navbar-brand" href="#">
				Joaquin.Codigo
			</a>
			{children}
		</nav>
	);

};

export default TopBar;
