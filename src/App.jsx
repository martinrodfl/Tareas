import Logo from './componentes/Logo';

import ListaDeTareas from './componentes/ListaDeTareas';

import logo from '../src/assets/freecodecamp-logo.png';

import './App.css';

function App() {
	return (
		<div className='aplicacion-tareas'>
			<Logo imagen={logo} />
			<div className='tareas-lista-principal'>
				<h1>Mis Tareas</h1>
				<ListaDeTareas />
			</div>
		</div>
	);
}

export default App;
