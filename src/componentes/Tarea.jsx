import { RiDeleteBin6Line } from 'react-icons/ri';

import '../css/Tarea.css';

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
	return (
		<div
			className={
				completada ? 'tarea-contenedor completada' : 'tarea-contenedor'
			}
		>
			<div
				className='tarea-texto'
				onClick={() => completarTarea(id)}
			>
				{texto}
			</div>
			<div
				className='tarea-contenedor-iconos'
				onClick={() => eliminarTarea(id)}
			>
				<RiDeleteBin6Line className='tarea-icono' />
			</div>
		</div>
	);
}

export default Tarea;
