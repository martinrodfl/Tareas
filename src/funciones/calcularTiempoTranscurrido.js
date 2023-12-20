export function calcularTiempoTranscurrido(fechaCreacion) {
	console.log(
		'🚀 ~ file: calcularTiempoTranscurrido.js:2 ~ fechaCreacion:',
		fechaCreacion
	);
	let fechaCreacionObj = new Date(fechaCreacion);

	let ahora = new Date();
	let tiempoTranscurrido = Math.max(0, ahora - fechaCreacionObj);

	let segundos = Math.floor(tiempoTranscurrido / 1000); // 1 segundo = 1000 milisegundos
	let minutos = Math.floor(tiempoTranscurrido / 60000); // 1 minuto = 60000 milisegundos
	let horas = Math.floor(tiempoTranscurrido / 3600000); // 1 hora = 3600000 milisegundos
	let dias = Math.floor(tiempoTranscurrido / (24 * 3600000));
	let semanas = Math.floor(segundos / 604800);
	let meses = Math.floor(semanas / 4);
	let años = Math.floor(meses / 12);

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
	} else if (semanas < 4) {
		return formatearDosCifras(semanas) + ' semanas';
	} else if (meses < 12) {
		return formatearDosCifras(meses) + ' meses';
	} else {
		return formatearDosCifras(años) + ' años';
	}
}
