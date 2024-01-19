import { createContext, useState } from 'react';
import {
	guardarLocalStorage,
	obtenerLocalStorage,
} from '../funciones/guardarEnLocalStorage';
const LanguageContext = createContext();

// const initialLanguage = obtenerLocalStorage('lang');
const translations = {
	es: {
		titleApp: 'Tareas Simples',
		inputText: 'Escribe una Tarea',
		buttonText: 'Agregar Tarea',
		totals: 'Totales',
		toDo: 'Por Hacer',
		completed: 'Completadas',
		createdAt: 'Creada hace',
		createdOn: 'Creada el',

		titleDeleteModal: 'Confirmar Eliminacion',
		messageDeleteModal: '¿Estás seguro de que quieres borrar este elemento?',
		cancelButton: 'Cancelar',
		confirmButton: 'Confirmar',

		seconds: ' segundos',
		minutes: ' minutos',
		hours: ' horas',
		days: ' dias',
		weeks: ' semanas',
		months: ' meses',
		years: ' años',
	},
	en: {
		titleApp: 'Simple Tasks',
		inputText: 'Write a Task',
		buttonText: 'Add Task',
		totals: 'Totals',
		toDo: 'To Do',
		completed: 'Completed',
		createdAt: 'Created',
		createdOn: 'Created on',

		titleDeleteModal: 'Confirm Elimination',
		messageDeleteModal: '¿Are you sure you want to delete this item?',
		cancelButton: 'Cancel',
		confirmButton: 'Confirm',

		seconds: ' seconds',
		minutes: ' minutes',
		hours: ' hours',
		days: ' days',
		weeks: ' weeks',
		months: ' months',
		years: ' years',
	},
};

const LanguageProvider = ({ children }) => {
	const [lang, setLang] = useState(obtenerLocalStorage('lang'));
	const [texts, setTexts] = useState(translations[lang]);

	const handleLang = () => {
		const newLang = lang === 'es' ? 'en' : 'es';
		setLang(newLang);
		setTexts(translations[newLang]);
		guardarLocalStorage('lang', newLang);
	};

	const data = { handleLang, lang, texts };
	return (
		<LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
	);
};

export { LanguageProvider };
export default LanguageContext;
