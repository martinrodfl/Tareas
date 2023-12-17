import { useState } from 'react';
import useScreenSize from '../hooks/useScreenSize';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { RiEdit2Line } from 'react-icons/ri';
import { RiSave3Line } from 'react-icons/ri';
import { MdOutlineDoneOutline } from 'react-icons/md';
import { guardarLocalStorage } from '../funciones/guardarEnLocalStorage';
import '../css/Tarea.css';

// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function Tarea({
	id,
	texto,
	completada,
	completarTarea,
	eliminarTarea,
	tareas,
	setTareas,
}) {
	const [text, setText] = useState(texto);
	const [isEditing, setIsEditing] = useState(false);

	const { ancho } = useScreenSize();

	const handleTextChange = (event) => {
		setText(event.target.value);
	};

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = () => {
		setIsEditing(false);
		const tareasEditadas = tareas.map((tarea) => {
			if (tarea.id === id) {
				tarea.texto = text;
			}
			return tarea;
		});
		setTareas(tareasEditadas);
		guardarLocalStorage(tareasEditadas);
	};
	return (
		<div
			className={
				completada ? 'tarea-contenedor completada' : 'tarea-contenedor'
			}
		>
			<div
				className={
					completada
						? 'completar-tarea-onclick-completada'
						: 'completar-tarea-onclick'
				}
				onClick={() => completarTarea(id)}
			>
				<MdOutlineDoneOutline />
			</div>

			<div className='editable-card tarea-texto'>
				{isEditing ? (
					<textarea
						className='textarea'
						value={text}
						onChange={handleTextChange}
						rows={3}
						cols={ancho < 321 ? 22 : ancho < 376 ? 27 : ancho < 500 ? 29 : 50}
					/>
				) : (
					<p>{text}</p>
				)}
			</div>

			<div>
				<div className='tarea-contenedor-iconos'>
					{isEditing ? (
						<RiSave3Line
							className='tarea-icono'
							onClick={handleSaveClick}
						/>
					) : (
						<RiEdit2Line
							className='tarea-icono'
							onClick={handleEditClick}
						/>
					)}
				</div>
				<div
					className='tarea-contenedor-iconos'
					onClick={() => eliminarTarea(id)}
				>
					<RiDeleteBin6Line className='tarea-icono' />
				</div>
			</div>
		</div>
	);
}

export default Tarea;
