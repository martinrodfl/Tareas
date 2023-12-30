import { useState, useEffect } from 'react';
import icon from '../assets/pwaIcons/st-87x87px.png';
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
					<div className='pantalla-inicio-container-icon'>
						<img
							src={icon}
							alt=''
						/>
					</div>
					<div className='pantalla-inicio-container-name'>
						<h1>Tareas Simples</h1>
					</div>
				</div>
			)}
		</>
	);
};

export default SplashScreen;
