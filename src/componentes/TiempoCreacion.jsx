import { useState, useContext } from 'react';
import LanguageContext from '../context/LanguageContext.jsx';
import { calcularTiempoTranscurrido } from '../funciones/calcularTiempoTranscurrido.js';
import { calcularTiempoTranscurridoEN } from '../funciones/calcularTiempoTranscurridoEN.js';

const TiempoCreacion = ({ fechaCreacionString }) => {
	const { texts, lang } = useContext(LanguageContext);
	// console.log({ lang });
	const fechaCreacion = new Date(fechaCreacionString).toLocaleDateString();

	const [tiempoTranscurrido, setTiempoTranscurrido] = useState('');

	setInterval(() => {
		if (lang === 'es') {
			setTiempoTranscurrido(calcularTiempoTranscurrido(fechaCreacionString));
			return;
		} else {
			setTiempoTranscurrido(calcularTiempoTranscurridoEN(fechaCreacionString));
			return;
		}
	}, 10000);

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
