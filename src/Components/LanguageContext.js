import React, { createContext, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState('es');

	const toggleLanguage = () => {
		setLanguage(language === 'en' ? 'es' : 'en');
	};

	return (
		<LanguageContext.Provider value={{ language, toggleLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};

export default LanguageContext;
