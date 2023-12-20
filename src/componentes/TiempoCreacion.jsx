import { useEffect, useState } from 'react';
import { calcularTiempoTranscurrido } from '../funciones/calcularTiempoTranscurrido.js';

const TiempoCreacion = ({ fechaCreacionString }) => {
	// console.log(
	// 	'🚀 ~ file: TiempoCreacion.jsx:5 ~ TiempoCreacion ~ fechaCreacionString:',
	// 	fechaCreacionString
	// );
	const fechaCreacion = new Date(fechaCreacionString).toLocaleDateString();
	const [tiempoTranscurrido, setTiempoTranscurrido] = useState('');
	useEffect(() => {
		setInterval(() => {
			const tiempo = calcularTiempoTranscurrido(fechaCreacionString);

			setTiempoTranscurrido(tiempo);
		}, 30000);
	}, [fechaCreacionString]);

	return (
		<div>
			{tiempoTranscurrido ? (
				<p>Creada hace {tiempoTranscurrido}</p>
			) : (
				<p>Creada el {fechaCreacion}</p>
			)}
		</div>
	);
};

export default TiempoCreacion;
