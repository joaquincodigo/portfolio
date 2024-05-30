import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const TopBar = ({ children }) => {
	const { theme } = useContext(ThemeContext);

	return (
		<nav
			className="navbar fixed-top shadow-sm p-0"
			style={{
				backgroundColor: theme === 'dark' ? '#001141' : '#ffffff',
			}}
		>
			<div
				className="container-fluid d-flex align-items-center pt-2 pb-2 pt-lg-1 pb-lg-1"
				style={{
					boxShadow: theme === 'dark' ? '0px 0.9px 2px #d0e2ff' : '0px 0.2px 2px #001141'
				}}
			>
				<p
					className="navbar-brand p-0 m-0"
					style={{ color: theme === 'dark' ? '#ffffff' : '#001141' }}
				>
					joaquín
					<span className='ibm-plex-sans-semibold'>.código</span>
				</p>
				{children}
			</div>
		</nav>
	);
};

export default TopBar;



// const styles = theme === 'dark' ?
// 	// DARK THEME
// 	{
// 		backgroundColor: '#001141',
// 		color: '#ffffff',
// 		boxShadow: '0px 0.8px 4px #d0e2ff'
// 	}
// 	:
// 	// LIGHT THEME
// 	{
// 		backgroundColor: '#ffffff',
// 		color: '#001141'
// 	};