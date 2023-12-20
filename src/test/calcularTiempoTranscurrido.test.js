import { it, expect } from 'vitest';

import { calcularTiempoTranscurrido } from '../funciones/calcularTiempoTranscurrido';

// Returns the time elapsed in seconds if it's less than 60.
it("should return the time elapsed in seconds when it's less than 60", () => {
	const result = calcularTiempoTranscurrido(new Date().getTime() - 500);
	expect(result).toBe('00 segundos');
});

// Returns the time elapsed in minutes if it's less than 60 minutes.
// Returns the time elapsed in minutes if it's less than 60 minutes.
it("should return the time elapsed in minutes when it's less than 60 minutes", () => {
	const result = calcularTiempoTranscurrido(new Date().getTime() - 5000);
	expect(result).toBe('00 minutos');
});
