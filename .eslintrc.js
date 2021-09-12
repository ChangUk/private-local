module.exports = {
	parser: "vue-eslint-parser",
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:vue/vue3-recommended",
		"plugin:prettier/recommended",
		"plugin:@typescript-eslint/recommended",
	],
	parserOptions: {
		parser: "@typescript-eslint/parser",
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["vue", "prettier"],
	rules: {
		"no-unused-vars": ["warn"],
		"prettier/prettier": [
			"warn",
			{
				endOfLine: "auto",
			},
		],
	},
};
