import { useEffect, useState } from 'react';
import { calcularTiempoTranscurrido } from '../funciones/calcularTiempoTranscurrido.js';

const TiempoCreacion = ({ fechaCreacionString }) => {
	const fechaCreacion = new Date(fechaCreacionString).toLocaleDateString();
	const [tiempoTranscurrido, setTiempoTranscurrido] = useState('');
	useEffect(() => {
		setInterval(() => {
			const tiempo = calcularTiempoTranscurrido(fechaCreacionString);

			setTiempoTranscurrido(tiempo);
		}, 10000);
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
