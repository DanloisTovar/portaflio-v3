/* eslint-disable */

/** @type {import("stylelint").Config} */
export default {
	extends: ['stylelint-config-standard'],
	plugins: ['stylelint-scss'],

	overrides: [
		{
			files: ['**/*.scss'],
			customSyntax: 'postcss-scss',
			extends: ['stylelint-config-standard-scss'],
			rules: {
				// usar reglas SCSS específicas sólo para .scss
				'scss/at-rule-no-unknown': true,
			},
		},
		{
			files: ['**/*.astro'],
			customSyntax: 'postcss-html',
		},
	],
	rules: {
		// permitir @import 'x' en lugar de url('x') para compatibilidad con Tailwind
		'import-notation': 'string',
		// regla genérica para no producir falsos positivos en CSS
		'at-rule-no-unknown': null,
	},
};
