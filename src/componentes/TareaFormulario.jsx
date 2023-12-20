import '../css/TareaFormulario.css';

function TareaFormulario({ input, setInput, onSubmit }) {
	const manejarCambio = (e) => {
		setInput(e.target.value);
	};

	const manejarEnvio = (e) => {
		e.preventDefault();
		let tiempo = new Date();

		let fechaString = `${tiempo}`;

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
