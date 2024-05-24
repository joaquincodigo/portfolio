import React, { useContext } from 'react';

import ThemeContext from './ThemeContext';

const TopBar = ({ children }) => {
	const { theme } = useContext(ThemeContext);

	return (
		<nav class="navbar fixed-top bg-light shadow-sm">
			<div class="container-fluid">
				<a class="navbar-brand " href="#">
					joaquín<span className='ibm-plex-sans-semibold'>.código</span>
				</a>
				{children}
			</div>
		</nav>
	);

};

export default TopBar;
