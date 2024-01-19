import { useState, useContext } from 'react';
import LanguageContext from '../context/LanguageContext.jsx';
import { calcularTiempoTranscurrido } from '../funciones/calcularTiempoTranscurrido.js';
import { calcularTiempoTranscurridoEN } from '../funciones/calcularTiempoTranscurridoEN.js';

const TiempoCreacion = ({ fechaCreacionString }) => {
	const { texts, lang } = useContext(LanguageContext);
	// console.log({ lang });
	const fechaCreacion = new Date(fechaCreacionString).toLocaleDateString();

	const [tiempoTranscurrido, setTiempoTranscurrido] = useState('');
	// useEffect(() => {
	setInterval(() => {
		if (lang === 'es') {
			setTiempoTranscurrido(calcularTiempoTranscurrido(fechaCreacionString));
		} else {
			setTiempoTranscurrido(calcularTiempoTranscurridoEN(fechaCreacionString));
		}
	}, 1000);
	// }, [fechaCreacionString, lang]);
	// console.log({ tiempoTranscurrido });
	return (
		<div>
			{tiempoTranscurrido ? (
				<p>
					{texts.createdAt} {tiempoTranscurrido}
				</p>
			) : (
				<p>
					{texts.createdOn} {fechaCreacion}
				</p>
			)}
		</div>
	);
};

export default TiempoCreacion;
