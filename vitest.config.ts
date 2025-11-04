import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		// evita que Vitest encuentre los tests de Nightwatch
		exclude: [
			'node_modules',
			'dist',
			'testing/e2e',
			'nightwatch/**',
			'testing/testing-astro/e2e/**',
			'testing/testing-docker/e2e/**',
		],
	},
});

// 🎯 Esta configuracion de vitest se ralizo para que ignore los tests de Nightwatch y no interfiera con su ejecucion.
