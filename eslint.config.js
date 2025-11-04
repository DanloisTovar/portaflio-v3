import { defineConfig } from 'eslint/config';
import config from 'eslint-config-xo';
import prettierConfig from 'eslint-config-prettier';
import * as tsESLintPlugin from '@typescript-eslint/eslint-plugin';
import * as astroPlugin from 'eslint-plugin-astro';
import * as tsESLintParser from '@typescript-eslint/parser';
import astroESLintParser from 'astro-eslint-parser';

export default defineConfig([
	// === 1️⃣ Configs base externas (XO + Prettier)
	config,
	prettierConfig,

	// === 2️⃣ Global
	{
		ignores: ['node_modules/**', 'dist/**', 'public/**'],
		files: ['**/*.{js,jsx,ts,tsx}'],
		plugins: {
			'@typescript-eslint': tsESLintPlugin,
		},
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		rules: {
			semi: ['error', 'always'],
			'capitalized-comments': 'off',
		},
	},

	// === 3️⃣ TypeScript
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parser: tsESLintParser,
			parserOptions: {
				project: ['./tsconfig.json'],
			},
		},
		rules: {
			// Agrega reglas TS específicas si quieres
		},
	},

	// === 4️⃣ Astro
	{
		files: ['**/*.astro'],
		plugins: {
			astro: astroPlugin,
		},
		languageOptions: {
			parser: astroESLintParser,
			parserOptions: {
				parser: tsESLintParser,
				extraFileExtensions: ['.astro'],
			},
		},
		processor: astroPlugin.processors.astro,
		rules: {
			// Puedes añadir tus propias reglas Astro
		},
	},

	// === 5️⃣ E2E Tests con Nightwatch
	{
		files: [
			'testing/testing-astro/e2e/**/*.ts',
			'testing/testing-astro/e2e/**/*.js',
			'testing/testing-docker/e2e/**/*.ts',
			'testing/testing-docker/e2e/**/*.js',
			'nightwatch/**/*.ts',
			'nightwatch/**/*.js',
		],
		/* env: {
			mocha: true,
			node: true,
		}, */

		languageOptions: {
			globals: {
				// mocha / vitest style
				describe: 'readonly',
				it: 'readonly',
				test: 'readonly',
				expect: 'readonly',
				vi: 'readonly',
				before: 'readonly',
				after: 'readonly',
				beforeEach: 'readonly',
				afterEach: 'readonly',
				// nightwatch global
				browser: 'readonly',
				// node globals used in tests/config
				process: 'readonly',
				__dirname: 'readonly',
				require: 'readonly',
				module: 'readonly',
			},
		},

		// Reglas específicas para tests / nightwatch
		rules: {
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'prefer-arrow-callback': 'off',
			'object-shorthand': 'off',
			'dot-notation': 'off',
			'no-undef': 'off',
		},
	},
]);
