const guardarLocalStorage = (tareasActualizadas) => {
	const tareas = localStorage.setItem(
		'TAREAS',
		JSON.stringify(tareasActualizadas)
	);
	return tareas;
};

const obtenerLocalStorage = () => {
	const tareas = JSON.parse(localStorage.getItem('TAREAS'));
	return tareas || [];
};

export { guardarLocalStorage, obtenerLocalStorage };
