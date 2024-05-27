import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const MainContainer = ({ children }) => {

	const { theme } = useContext(ThemeContext);

	const styles = {
		backgroundColor: theme === 'dark' ? '#001141' : '#f2f4f8',
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