import { useState } from 'react';

import TiempoCreacion from './TiempoCreacion.jsx';

import useScreenSize from '../hooks/useScreenSize.jsx';

import { TfiTrash } from 'react-icons/tfi';

import { TfiPencil } from 'react-icons/tfi';

import { TfiSave } from 'react-icons/tfi';

import { MdOutlineDoneOutline } from 'react-icons/md';

import { guardarLocalStorage } from '../funciones/guardarEnLocalStorage';

import '../css/Tarea.css';

function Tarea({
	id,
	texto,
	completada,
	fechaCreacion,
	completarTarea,
	eliminarTarea,
	tareas,
	setTareas,
}) {
	const [text, setText] = useState(texto);
	const [isEditing, setIsEditing] = useState(false);

	const { width } = useScreenSize();
	// console.log('FECHA DE CREACION EN TAREAS:', fechaCreacion);
	// console.log('FECHA DE CREACION EN TAREAS tipo:', typeof fechaCreacion);

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
								? 18
								: width < 361
								? 23
								: width < 376
								? 24
								: width < 385
								? 29
								: width < 391
								? 29
								: width < 415
								? 28
								: width < 429
								? 27
								: width < 821
								? 38
								: width < 1921
								? 38
								: width < 3841
								? 38
								: 48
						}
					/>
				) : (
					<p>{text}</p>
				)}
				<TiempoCreacion
					className={
						completada
							? '.tiempo-creacion tiempo-completada '
							: 'tiempo-creacion'
					}
					fechaCreacionString={fechaCreacion}
				/>
			</div>

			<div className='tarea-contenedor-iconos'>
				{isEditing ? (
					<TfiSave
						className='tarea-icono-chico'
						onClick={handleSaveClick}
					/>
				) : (
					<TfiPencil
						className='tarea-icono-chico'
						onClick={handleEditClick}
					/>
				)}

				<TfiTrash
					className='tarea-icono-grande'
					onClick={() => eliminarTarea(id)}
				/>
			</div>
		</div>
	);
}

export default Tarea;
