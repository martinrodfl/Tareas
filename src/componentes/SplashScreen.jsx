import { useState, useEffect } from 'react';
import '../css/SplashScreen.css';

const SplashScreen = () => {
	const [mostrarPantallaInicio, setmostrarPantallaInicio] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setmostrarPantallaInicio(!mostrarPantallaInicio);
			setmostrarPantallaInicio(false);
		}, 2000);
	}, [mostrarPantallaInicio]);
	return (
		<>
			{mostrarPantallaInicio && (
				<div className='pantalla-inicio '>
					<h1>Tareas Simples</h1>
				</div>
			)}
		</>
	);
};

export default SplashScreen;
