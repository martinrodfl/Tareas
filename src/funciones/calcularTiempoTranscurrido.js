export function calcularTiempoTranscurrido(fechaCreacion, lang) {
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
	let resultado = '';

	const formatearADosCifras = (valor) => (valor >= 10 ? valor : '0' + valor);

	if (segundos < 60) {
		resultado =
			formatearADosCifras(segundos) +
			(lang === 'en' ? ' seconds' : ' segundos');
	} else if (minutos < 60) {
		resultado =
			formatearADosCifras(minutos) + (lang === 'en' ? ' minutes' : ' minutos');
	} else if (horas < 24) {
		resultado =
			formatearADosCifras(horas) + (lang === 'en' ? ' hours' : ' horas');
	} else if (dias < 7) {
		resultado = formatearADosCifras(dias) + (lang === 'en' ? ' days' : ' dias');
	} else if (semanas < 4) {
		resultado =
			formatearADosCifras(semanas) + (lang === 'en' ? ' weeks' : ` semanas`);
	} else if (meses < 12) {
		resultado =
			formatearADosCifras(meses) + (lang === 'en' ? ' months' : ' meses');
	} else {
		resultado =
			formatearADosCifras(años) + (lang === 'en' ? ' years' : ' años');
	}

	return resultado;
}
