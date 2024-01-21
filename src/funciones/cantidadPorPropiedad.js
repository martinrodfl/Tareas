export function cantidadPorPropiedad(arr) {
	// Verificar si el argumento es un array
	if (!Array.isArray(arr)) {
		console.error('Error: El argumento no es un array.');
		return 0;
	}

	const completadas = arr.filter((item) => item.completada === true);

	return completadas.length;
}
