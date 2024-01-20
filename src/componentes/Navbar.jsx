import { SwitchIdioma } from './SwitchIdioma';
import { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';
import '../css/Navbar.css';

const Navbar = ({ modoDark, cambiarModo }) => {
	const { texts } = useContext(LanguageContext);

	return (
		<div className='Nav'>
			<h1 className='titulo-app'>{texts?.titleApp}</h1>
			<SwitchIdioma />

			<div className='switch-container'>
				<label
					htmlFor='switchColor'
					className='switch'
				>
					<input
						id='switchColor'
						type='checkbox'
						checked={modoDark}
						onChange={cambiarModo}
					/>
					<span className='slider'></span>
				</label>
			</div>
		</div>
	);
};

export default Navbar;
