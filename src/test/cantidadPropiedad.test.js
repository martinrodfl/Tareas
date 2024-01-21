import { it, expect } from 'vitest';
import { cantidadPorPropiedad } from '../funciones/cantidadPorPropiedad';

it('should return 0 when the argument is an empty array', () => {
	const arg = [];

	const result = cantidadPorPropiedad(arg);

	expect(result).toEqual(0);
});

it('should return the number of items with completada property set to true', () => {
	const arg = [
		{ completada: true },
		{ completada: false },
		{ completada: true },
		{ completada: true },
	];

	const result = cantidadPorPropiedad(arg);

	expect(result).toEqual(3);
});

it('should return 0 when there are no items with completada property set to true', () => {
	const arg = [
		{ completada: false },
		{ completada: false },
		{ completada: false },
	];

	const result = cantidadPorPropiedad(arg);

	expect(result).toEqual(0);
});

// Should return 0 when the argument is null
it('should return 0 when the argument is null', () => {
	const arg = null;

	const result = cantidadPorPropiedad(arg);

	expect(result).toEqual(0);
});

// Should return 0 when the argument is not an array
it('should return 0 when the argument is not an array', () => {
	const arg = {};

	const result = cantidadPorPropiedad(arg);

	expect(result).toEqual(0);
});
