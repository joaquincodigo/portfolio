import React, { useContext } from 'react';

import LanguageContext from './LanguageContext';
import ThemeContext from './ThemeContext';

import ProjectEntry from './ProjectEntry'


const ProjectPokemon = () => {

	const { language } = useContext(LanguageContext);
	const { theme } = useContext(ThemeContext);

	const title = language === 'en' ? "Pokémon Search" : "Búsqueda Pokémon"

	const text = language === 'en' ?
		"Explore and filter through the original 151 Pokémon to find your favorite! This app was lovingly crafted with React, aiming to evoke a sense of nostalgia."
		:
		"¡Explora y filtra entre los 151 Pokémon originales para encontrar tu favorito! Esta aplicación fue creada con cariño usando React, con la intención de evocar un sentimiento de nostalgia."

	const image = "images/PokemonProjectPhoto.bmp"
	const link = "example.com"
	return (
		<div className='ProjectJap'>
			<ProjectEntry title={title} text={text} image={image} link={link} />
		</div>
	);
};

export default ProjectPokemon;