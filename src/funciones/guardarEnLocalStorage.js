const guardarLocalStorage = (clave, objeto) => {
	try {
		const objetoString = JSON.stringify(objeto);
		localStorage.setItem(clave, objetoString);
	} catch (error) {
		console.error('Error al intentar guardar en Local Storage:', error);
	}
};

const obtenerLocalStorage = (clave) => {
	try {
		const objetoJSON = localStorage.getItem(clave);

		if (objetoJSON === 'undefined') {
			console.log(
				`No se encontró ningún valor en Local Storage para la clave: ${clave}`
			);
			return [];
		}
		const objeto = JSON.parse(objetoJSON);

		return objeto;
	} catch (error) {
		console.error('Error al intentar obtener valor de Local Storage:', error);
		return [];
	}
};

export { guardarLocalStorage, obtenerLocalStorage };
