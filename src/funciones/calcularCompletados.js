export const calcularCompletados = (arrDeObjetos) => {
	let numeroDeCompletados = 0;

	for (const objeto of arrDeObjetos) {
		if (!('completada' in objeto)) {
			throw new Error('El objeto no tiene la propiedad "completada"');
		}

		if (objeto.completada) {
			numeroDeCompletados++;
		}
	}

	return numeroDeCompletados;
};
