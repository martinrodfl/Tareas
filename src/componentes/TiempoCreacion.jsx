import { useState, useContext, useEffect } from 'react';
import LanguageContext from '../context/LanguageContext.jsx';
import { calcularTiempoTranscurrido } from '../funciones/calcularTiempoTranscurrido.js';

const TiempoCreacion = ({ fechaCreacionString }) => {
	const { texts, lang } = useContext(LanguageContext);

	const fechaCreacion = new Date(fechaCreacionString).toLocaleDateString();

	const [tiempoTranscurrido, setTiempoTranscurrido] = useState('');
	useEffect(() => {
		const intervalId = setInterval(() => {
			setTiempoTranscurrido(
				calcularTiempoTranscurrido(fechaCreacionString, lang)
			);
		}, 1000);

		return () => clearInterval(intervalId);
	}, [fechaCreacionString, lang]);

	return (
		<div>
			{tiempoTranscurrido ? (
				lang === 'en' ? (
					<p>
						{texts?.createdAt} {tiempoTranscurrido} {'ago'}
					</p>
				) : (
					<p>
						{texts?.createdAt} {tiempoTranscurrido}
					</p>
				)
			) : (
				<p>
					{texts?.createdOn} {fechaCreacion}
				</p>
			)}
		</div>
	);
};

export default TiempoCreacion;
