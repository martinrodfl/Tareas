import '../css/TareaFormulario.css';

function TareaFormulario(props) {
	const manejarCambio = (e) => {
		props.setInput(e.target.value);
	};

	const manejarEnvio = (e) => {
		e.preventDefault();

		const tareaNueva = {
			id: crypto.randomUUID(),
			texto: props.input,
			completada: false,
		};

		props.onSubmit(tareaNueva);
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
