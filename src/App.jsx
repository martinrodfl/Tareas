import { useState, useEffect } from 'react';

import Logo from './componentes/Logo';

import ListaDeTareas from './componentes/ListaDeTareas';

import TareaFormulario from './componentes/TareaFormulario';

import EtiquetaColor from './componentes/EtiquetaColor.jsx';

import logo from '../src/assets/freecodecamp-logo.png';

import {
	guardarLocalStorage,
	obtenerLocalStorage,
} from '../src/funciones/guardarEnLocalStorage.js';

import { cantidadPorPropiedad } from './funciones/cantidadPorAtributo.js';

import './App.css';
import './css/EtiquetaColor.css';
let initialState = obtenerLocalStorage('TAREAS');
function App() {
	const [input, setInput] = useState('');
	const [tareas, setTareas] = useState(initialState);
	const [completadas, setCompletada] = useState(0);

	// ...

	const cantidadTareasCompletadas = cantidadPorPropiedad(
		tareas,
		'completada',
		true
	);

	useEffect(() => {
		setCompletada(cantidadTareasCompletadas);
	}, [tareas, cantidadTareasCompletadas]);

	const agregarTarea = (tarea) => {
		if (tarea.texto.trim()) {
			tarea.texto = tarea.texto.trim();
			const tareasActualizadas = [tarea, ...tareas];
			setTareas(tareasActualizadas);
			guardarLocalStorage(tareasActualizadas);
		}
	};

	const eliminarTarea = (id) => {
		const confirmacion = confirm('¿Desea eliminar la tarea?');
		if (confirmacion) {
			const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
			setTareas(tareasActualizadas);
			guardarLocalStorage(tareasActualizadas);
		}
	};

	const completarTarea = (id) => {
		const tareasActualizadas = tareas.map((tarea) => {
			if (tarea.id === id) {
				tarea.completada = !tarea.completada;
			}
			return tarea;
		});
		setTareas(tareasActualizadas);
		guardarLocalStorage(tareasActualizadas);
	};

	return (
		<div className='aplicacion-tareas'>
			<Logo imagen={logo} />
			<div className='tareas-lista-principal'>
				<h1>Mis Tareas</h1>

				<TareaFormulario
					input={input}
					setInput={setInput}
					onSubmit={agregarTarea}
				/>
				<div className='titulo-etiquetas'>
					<EtiquetaColor
						tipo='totales'
						texto='Totales'
						cantidad={tareas.length}
					/>
					<EtiquetaColor
						tipo='incompletas'
						texto='Por hacer'
						cantidad={tareas.length - completadas}
					/>
					<EtiquetaColor
						tipo='completadas'
						texto='Completadas'
						cantidad={completadas}
					/>
					{/* <span>Totales {tareas.length}</span> -
					<span> Por hacer {tareas.length - completadas} </span> -
					<span> Completadas {completadas}</span> */}
				</div>
				<ListaDeTareas
					tareas={tareas}
					eliminarTarea={eliminarTarea}
					completarTarea={completarTarea}
				/>
			</div>
		</div>
	);
}

export default App;
