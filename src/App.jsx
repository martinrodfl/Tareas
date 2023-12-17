import { useState, useEffect } from 'react';

import ListaDeTareas from './componentes/ListaDeTareas';

import TareaFormulario from './componentes/TareaFormulario';

import EtiquetaColor from './componentes/EtiquetaColor.jsx';
import Logo from './componentes/Logo';

import logo from '../src/assets/freecodecamp-logo.png';

import {
	guardarLocalStorage,
	obtenerLocalStorage,
} from '../src/funciones/guardarEnLocalStorage.js';

import { cantidadPorPropiedad } from './funciones/cantidadPorAtributo.js';

import Modal from './componentes/Modal.jsx';

import './App.css';

import './css/EtiquetaColor.css';

let initialState = obtenerLocalStorage('TAREAS');

function App() {
	const [input, setInput] = useState('');
	const [tareas, setTareas] = useState(initialState);
	const [completadas, setCompletada] = useState(0);

	const [eliminarTareaId, setEliminarTareaId] = useState(null);
	const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

	const cantidadTareasCompletadas = cantidadPorPropiedad(
		tareas,
		'completada',
		true
	);

	useEffect(() => {
		setCompletada(cantidadTareasCompletadas);
	}, [tareas, cantidadTareasCompletadas]);
	// console.log('🚀 ~ file: App.jsx:44 ~ App ~ tareas:', tareas);

	const agregarTarea = (tarea) => {
		if (tarea.texto.trim()) {
			tarea.texto = tarea.texto.trim();
			const tareasActualizadas = [tarea, ...tareas];
			setTareas(tareasActualizadas);
			guardarLocalStorage(tareasActualizadas);
		}
	};

	const manejarConfirmacionDeEliminacion = () => {
		if (eliminarTareaId) {
			const tareasActualizadas = tareas.filter(
				(tarea) => tarea.id !== eliminarTareaId
			);
			setTareas(tareasActualizadas);
			guardarLocalStorage(tareasActualizadas);
		}
		setMostrarConfirmacion(false);
		setEliminarTareaId(null); // Reset the state
	};

	const completarTarea = (id) => {
		const tareasActualizadas = tareas.map((tarea) => {
			if (tarea.id === id) {
				tarea.completada = !tarea.completada;
			}
			return tarea;
		});

		// Reorganizar el array para poner las tareas completadas primero
		const tareasOrdenadas = [
			...tareasActualizadas.filter((tarea) => !tarea.completada),
			...tareasActualizadas.filter((tarea) => tarea.completada),
		];
		setTareas(tareasOrdenadas);
		guardarLocalStorage(tareasOrdenadas);
	};

	const eliminarTarea = (id) => {
		manejarAperturaDeConfirmacion(id);
	};

	const manejarAperturaDeConfirmacion = (id) => {
		setMostrarConfirmacion(true);
		setEliminarTareaId(id);
	};

	const editarTarea = (tarea) => {
		// const tareasEditadas = tareas.map((tarea) => {
		// 	if (tarea.id === id) {
		// 		tarea.texto = e.target.value;
		// 	}
		// 	return tarea;
		// });
		// setTareas(tareasEditadas);
		// guardarLocalStorage(tareasEditadas);
		console.log('editando.....', tarea.id);
	};

	return (
		<div className='aplicacion-tareas'>
			{mostrarConfirmacion && (
				<Modal
					titulo='Confirmar Eliminacion'
					onConfirm={manejarConfirmacionDeEliminacion}
					onCancel={() => setMostrarConfirmacion(false)}
					isOpen={mostrarConfirmacion}
				>
					¿Estás seguro de que quieres borrar este elemento?
				</Modal>
			)}
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
				</div>
				<ListaDeTareas
					tareas={tareas}
					eliminarTarea={eliminarTarea}
					completarTarea={completarTarea}
					setTareas={setTareas}
					editarTarea={editarTarea}
				/>
			</div>
		</div>
	);
}

export default App;
