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
		setInput('');
	};

	return (
		<form
			className='tarea-formulario'
			onSubmit={manejarEnvio}
		>
			<input
				className='tarea-input'
				type='text'
				name='texto'
				onChange={manejarCambio}
				autoComplete='off'
				id='input'
				value={input}
			/>
			<label
				htmlFor='input'
				title=' Escribe una Tarea '
				data-title=' Escribe una Tarea '
			></label>
			<button className='tarea-boton'>Agregar Tarea</button>
		</form>
	);
}

export default TareaFormulario;
