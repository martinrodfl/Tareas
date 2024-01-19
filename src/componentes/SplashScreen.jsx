import { useState, useEffect, useContext } from 'react';
import LanguageContext from '../context/LanguageContext';
import icon from '../assets/pwaIcons/st-87x87px.png';
import '../css/SplashScreen.css';

const SplashScreen = () => {
	const { texts } = useContext(LanguageContext);
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
						<h1>{texts?.titleApp} sdsdsdssd</h1>
					</div>
				</div>
			)}
		</>
	);
};

export default SplashScreen;
