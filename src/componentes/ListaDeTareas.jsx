import Tarea from './Tarea';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../css/ListaDeTareas.css';
// import { guardarLocalStorage } from '../funciones/guardarEnLocalStorage';

const ListaDeTareas = ({
	tareas,
	eliminarTarea,
	completarTarea,
	editarTarea,
	setTareas,
}) => {
	const reordenarTareas = (list, startIndex, endIndex) => {
		const result = [...list];
		const [removed] = result.splice(startIndex, 1);
		result.splice(endIndex, 0, removed);

		return result;
	};
	return (
		<>
			<DragDropContext
				onDragEnd={(result) => {
					const { source, destination } = result;
					if (!destination) {
						return;
					}
					if (
						source.index === destination.index &&
						source.droppableId === destination.droppableId
					) {
						return;
					}

					setTareas((prevTasks) =>
						reordenarTareas(prevTasks, source.index, destination.index)
					);
					// guardarLocalStorage((prevTasks) =>
					// 	reordenarTareas(prevTasks, source.index, destination.index)
					// );
				}}
			>
				<Droppable droppableId='tareass'>
					{(droppableProvided) => (
						<div
							{...droppableProvided.droppableProps}
							ref={droppableProvided.innerRef}
							className='tareas-lista-contenedor'
						>
							{tareas?.map((tarea, index) => (
								<Draggable
									key={tarea.id}
									draggableId={tarea.id}
									index={index}
								>
									{(draggableProvided) => (
										<div
											{...draggableProvided.draggableProps}
											ref={draggableProvided.innerRef}
											{...draggableProvided.dragHandleProps}
										>
											<Tarea
												id={tarea.id}
												texto={tarea.texto}
												completada={tarea.completada}
												completarTarea={completarTarea}
												eliminarTarea={eliminarTarea}
												editarTarea={editarTarea}
												tareas={tareas}
												setTareas={setTareas}
											/>
										</div>
									)}
								</Draggable>
							))}
							{droppableProvided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</>
	);
};

export default ListaDeTareas;
