import { useEffect, useState } from 'react';
import { calcularTiempoTranscurrido } from '../funciones/calcularTiempoTranscurrido.js';

const TiempoCreacion = ({ fechaCreacionString }) => {
	const [tiempoTranscurrido, setTiempoTranscurrido] = useState('');
	useEffect(() => {
		setInterval(() => {
			const tiempo = calcularTiempoTranscurrido(fechaCreacionString);

			setTiempoTranscurrido(tiempo);
		}, 3000);
	}, [fechaCreacionString]);

	return (
		<div>
			<p>Creada hace {tiempoTranscurrido}</p>
		</div>
	);
};

export default TiempoCreacion;
