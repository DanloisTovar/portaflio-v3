import config from 'eslint-config-xo';
import { defineConfig } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';
import * as tsESLintPlugin from '@typescript-eslint/eslint-plugin';
import * as astroPlugin from 'eslint-plugin-astro';
import * as tsESLintParser from '@typescript-eslint/parser';
import astroESLintParser from 'astro-eslint-parser';

export default defineConfig([
	// registrar plugins primero para que estén disponibles en los overrides
	{
		plugins: {
			/* 	astro: astroPlugin, */
			'@typescript-eslint': tsESLintPlugin,
		},
	},
	// configuración global: ignores + archivos a los que se aplicará la config
	{
		ignores: ['node_modules/**', 'dist/**', 'public/**'],
		files: ['**/*.{js,jsx,ts,tsx}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
	},
	// override específico para archivos .astro — usa el processor del plugin
	{
		files: ['**/*.astro'],
		plugins: {
			astro: astroPlugin,
		},
		processor: 'astro/astro',
		languageOptions: {
			parser: astroESLintParser,
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				parser: tsESLintParser,
				extraFileExtensions: ['.astro'],
			},
		},
		rules: {
			// reglas específicas para .astro (si quieres)
		},
	},
	// mantiene xo + prettier + tus overrides
	config,
	prettierConfig,
	{
		rules: {
			semi: ['error', 'always'],
			'capitalized-comments': 'off',
		},
	},

	// configuración específica para TypeScript:
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			/* parser: '@typescript-eslint/parser', */
			parser: tsESLintParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				project: ['./tsconfig.json'],
			},
		},
		rules: {
			// reglas específicas TS si las necesitas
		},
	},
]);
