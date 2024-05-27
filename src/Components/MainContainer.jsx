import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const MainContainer = ({ children }) => {

	const { theme } = useContext(ThemeContext);

	const styles = {
		backgroundColor: theme === 'dark' ? '#001141' : '#ffffff',
		color: theme === 'dark' ? '#ffffff' : '#001141',
	};

	return (
		<div
			className='MainContainer container-fluid p-3 m-0'
			style={styles}>
			{children}
		</div>
	);
};

export default MainContainer;