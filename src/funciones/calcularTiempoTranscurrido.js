export function calcularTiempoTranscurrido(fechaCreacion) {
	var fechaCreacionObj = new Date(fechaCreacion);
	var ahora = new Date();
	var tiempoTranscurrido = Math.max(0, ahora - fechaCreacionObj);

	var segundos = Math.floor(tiempoTranscurrido / 1000); // 1 segundo = 1000 milisegundos
	var minutos = Math.floor(tiempoTranscurrido / 60000); // 1 minuto = 60000 milisegundos
	var horas = Math.floor(tiempoTranscurrido / 3600000); // 1 hora = 3600000 milisegundos
	var dias = Math.floor(tiempoTranscurrido / (24 * 3600000));
	var semanas = Math.floor(segundos / 604800);

	const formatearDosCifras = (valor) => (valor >= 10 ? valor : '0' + valor);

	// Devolver el resultado como cadena
	if (segundos < 60) {
		return formatearDosCifras(segundos) + ' segundos';
	} else if (minutos < 60) {
		return formatearDosCifras(minutos) + ' minutos';
	} else if (horas < 24) {
		return formatearDosCifras(horas) + ' horas';
	} else if (dias < 7) {
		return formatearDosCifras(dias) + ' días';
	} else {
		return formatearDosCifras(semanas) + ' semanas';
	}
}
