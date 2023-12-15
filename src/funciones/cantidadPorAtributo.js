function cantidadPorPropiedad(objeto) {
	return objeto.filter((o) => o.completada).length;
}

export { cantidadPorPropiedad };
