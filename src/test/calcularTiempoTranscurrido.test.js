import { it, expect } from 'vitest';

import { calcularTiempoTranscurrido } from '../funciones/calcularTiempoTranscurrido';

it("01-should return the time elapsed in seconds when it's less than 1 minutes", () => {
	const result = calcularTiempoTranscurrido(new Date().getTime() - 500, 'es');
	expect(result).toBe('00 segundos');
});

it("02-should return the time elapsed in minutes when it's less than 2 minutes", () => {
	const result = calcularTiempoTranscurrido(
		new Date().getTime() - 110000,
		'es'
	);
	expect(result).toBe('01 minutos');
});

it("03-should return the time elapsed in minutes when it's less than 2 years", () => {
	const result = calcularTiempoTranscurrido(
		new Date().getTime() - 31556900000,
		'es'
	);
	expect(result).toBe('01 años');
});
