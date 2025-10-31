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
]);
