import { useContext } from 'react';

import LanguageContext from '../context/LanguageContext';

export const SwitchIdioma = () => {
	const { handleLang, lang } = useContext(LanguageContext);
	return (
		<div
			onClick={handleLang}
			style={{ cursor: 'pointer' }}
		>
			{lang === 'es' ? 'ES' : 'EN'}
		</div>
	);
};
