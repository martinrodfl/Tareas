import { useState } from 'react';

import TareaFormulario from './TareaFormulario';

import Tarea from './Tarea';

import '../css/ListaDeTareas.css';

let initialState = JSON.parse(localStorage.getItem('TAREAS'));

const ListaDeTareas = () => {
	// console.log(initialState);
	const [tareas, setTareas] = useState(initialState || []);

	const agregarTarea = (tarea) => {
		if (tarea.texto.trim()) {
			tarea.texto = tarea.texto.trim();
			const tareasActualizadas = [tarea, ...tareas];
			setTareas(tareasActualizadas);
			localStorage.setItem('TAREAS', JSON.stringify(tareasActualizadas));
		}
	};

	const eliminarTarea = (id) => {
		const confirmacion = confirm('¿Desea eliminar la tarea?');
		if (confirmacion) {
			const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
			setTareas(tareasActualizadas);
			localStorage.setItem('TAREAS', JSON.stringify(tareasActualizadas));
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
		localStorage.setItem('TAREAS', JSON.stringify(tareasActualizadas));
	};

	return (
		<>
			<TareaFormulario onSubmit={agregarTarea} />
			<div className='tareas-lista-contenedor'>
				{tareas.map((tarea) => (
					<Tarea
						key={tarea.id}
						id={tarea.id}
						texto={tarea.texto}
						completada={tarea.completada}
						completarTarea={completarTarea}
						eliminarTarea={eliminarTarea}
					/>
				))}
			</div>
		</>
	);
};

export default ListaDeTareas;
