import React, { useContext } from 'react';

import ThemeContext from './ThemeContext';

const TopBar = ({ children }) => {
	const { theme } = useContext(ThemeContext);

	return (
		<nav class="navbar fixed-top navbar-light bg-light">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">
					Joaquin.Codigo
				</a>
				{children}
			</div>
		</nav>
	);

};

export default TopBar;
