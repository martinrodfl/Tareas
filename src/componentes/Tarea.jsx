import { useState } from 'react';

import useScreenSize from '../hooks/useScreenSize.jsx';

import { RiDeleteBin6Line } from 'react-icons/ri';

import { RiEdit2Line } from 'react-icons/ri';

import { RiSave3Line } from 'react-icons/ri';

import { MdOutlineDoneOutline } from 'react-icons/md';

import { guardarLocalStorage } from '../funciones/guardarEnLocalStorage';

import '../css/Tarea.css';

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

	const { width } = useScreenSize();

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
		guardarLocalStorage('TAREAS', tareasEditadas);
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
						cols={
							width < 321
								? 22
								: width < 361
								? 27
								: width < 376
								? 28
								: width < 385
								? 29
								: width < 391
								? 30
								: width < 415
								? 33
								: width < 500
								? 35
								: 48
						}
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
