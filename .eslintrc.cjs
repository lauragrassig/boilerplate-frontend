/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.vue'],
			},
			alias: {
				map: [['@', './src']],
				extensions: ['.js', '.jsx', '.vue'],
			},
		},
	},
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-prettier',
		'plugin:import/recommended',
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	plugins: ['import'],
	rules: {
		'linebreak-style': 'off',
		'no-console': 'error',
		'no-duplicate-imports': 'error',
		'no-template-curly-in-string': 'error',
		'import/no-unresolved': [2],
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				groups: [
					'index',
					'sibling',
					'parent',
					'internal',
					'external',
					'builtin',
					'object',
					'type',
				],
			},
		],
	},
}
