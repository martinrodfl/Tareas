import '../css/TareaFormulario.css';

function TareaFormulario({ input, setInput, onSubmit }) {
	const manejarCambio = (e) => {
		setInput(e.target.value);
	};

	const manejarEnvio = (e) => {
		e.preventDefault();
		let tiempo = new Date();
		/* // Obtener los componentes de la fecha y la hora
		let año = tiempo.getUTCFullYear();
		let mes = ('0' + (tiempo.getUTCMonth() + 1)).slice(-2); // Agregar ceros a la izquierda si es necesario
		let dia = ('0' + tiempo.getUTCDate()).slice(-2); // Agregar ceros a la izquierda si es necesario
		let horas = ('0' + tiempo.getUTCHours()).slice(-2); // Agregar ceros a la izquierda si es necesario
		let minutos = ('0' + tiempo.getUTCMinutes()).slice(-2); // Agregar ceros a la izquierda si es necesario
		let segundos = ('0' + tiempo.getUTCSeconds()).slice(-2); // Agregar ceros a la izquierda si es necesario */
		// let milisegundos = ('00' + tiempo.getUTCMilliseconds()).slice(-3); // Agregar ceros a la izquierda si es necesario

		// Formar la cadena de fecha en el formato deseado
		let fechaString = `${tiempo}`;

		console.log(
			'🚀 ~ file: TareaFormulario.jsx:22 ~ manejarEnvio ~ fechaString:',
			fechaString
		);
		const tareaNueva = {
			id: crypto.randomUUID(),
			texto: input,
			completada: false,
			fechaCreacion: fechaString,
		};

		onSubmit(tareaNueva);
	};

	return (
		<form
			className='tarea-formulario'
			onSubmit={manejarEnvio}
		>
			<input
				className='tarea-input'
				type='text'
				placeholder='Escribe una Tarea'
				name='texto'
				onChange={manejarCambio}
				autoComplete='off'
			/>
			<button className='tarea-boton'>Agregar Tarea</button>
		</form>
	);
}

export default TareaFormulario;
