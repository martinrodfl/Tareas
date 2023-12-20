import { useState } from 'react';

import Navbar from './componentes/Navbar.jsx';

import ListaDeTareas from './componentes/ListaDeTareas';

import TareaFormulario from './componentes/TareaFormulario';

import EtiquetaColor from './componentes/EtiquetaColor.jsx';

import Modal from './componentes/Modal.jsx';

import { cantidadPorPropiedad } from './funciones/cantidadPorPropiedad.js';

import {
	guardarLocalStorage,
	obtenerLocalStorage,
} from './funciones/guardarEnLocalStorage.js';

import './App.css';
import './css/EtiquetaColor.css';

let initialValue = obtenerLocalStorage('TAREAS');

function App() {
	const [input, setInput] = useState('');

	const [tareas, setTareas] = useState(initialValue ?? []);

	const [eliminarTareaId, setEliminarTareaId] = useState(null);

	const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

	console.table(tareas);

	let cantidadCompletadas = cantidadPorPropiedad(tareas);

	// Funciones
	const agregarTarea = (tarea) => {
		if (tarea.texto.trim()) {
			tarea.texto = tarea.texto.trim();
			const tareasActualizadas = [tarea, ...tareas];
			setTareas(tareasActualizadas);
			guardarLocalStorage('TAREAS', tareasActualizadas);
			console.log('Tarea guardada');
		}
	};

	const manejarConfirmacionDeEliminacion = () => {
		if (eliminarTareaId) {
			const tareasActualizadas = tareas.filter(
				(tarea) => tarea.id !== eliminarTareaId
			);
			setTareas(tareasActualizadas);
			guardarLocalStorage('TAREAS', tareasActualizadas);
		}
		setMostrarConfirmacion(false);
	};

	const completarTarea = (id) => {
		const tareasActualizadas = tareas.map((tarea) => {
			if (tarea.id === id) {
				tarea.completada = !tarea.completada;
			}
			return tarea;
		});

		// Reordenar el array para poner las tareas completadas al final de la lista
		const tareasOrdenadas = [
			...tareasActualizadas.filter((tarea) => !tarea.completada),
			...tareasActualizadas.filter((tarea) => tarea.completada),
		];
		guardarLocalStorage('TAREAS', tareasOrdenadas);
		setTimeout(() => {
			setTareas(tareasOrdenadas);
		}, 200);
	};

	const eliminarTarea = (id) => {
		manejarAperturaDeConfirmacion(id);
	};

	const manejarAperturaDeConfirmacion = (id) => {
		setMostrarConfirmacion(true);
		setEliminarTareaId(id);
	};

	const editarTarea = (tarea) => {
		console.log('editando.....', tarea.id);
	};

	const [modoDark, setModoDark] = useState(true);

	const cambiarModo = () => {
		setModoDark(!modoDark);
	};

	return (
		<body className={modoDark ? 'dark-mode' : 'light-mode'}>
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
				<Navbar
					mododark={modoDark}
					cambiarModo={cambiarModo}
					tipo={modoDark}
				/>
				<div className='tareas-lista-principal'>
					<TareaFormulario
						input={input}
						setInput={setInput}
						onSubmit={agregarTarea}
					/>
					<h1>Mis Tareas</h1>
					<div className='titulo-etiquetas'>
						<EtiquetaColor
							tipo='totales'
							texto='Totales'
							cantidad={tareas.length}
						/>
						<EtiquetaColor
							tipo='incompletas'
							texto='Por hacer'
							cantidad={tareas.length - cantidadCompletadas}
						/>
						<EtiquetaColor
							tipo='completadas'
							texto='Completadas'
							cantidad={cantidadCompletadas}
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
		</body>
	);
}

export default App;
