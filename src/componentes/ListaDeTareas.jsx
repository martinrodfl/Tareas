import Tarea from './Tarea';

import '../css/ListaDeTareas.css';

const ListaDeTareas = ({ tareas, eliminarTarea, completarTarea }) => {
	return (
		<>
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
