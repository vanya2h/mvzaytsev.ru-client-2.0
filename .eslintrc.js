module.exports = {
	extends: ["airbnb-typescript"],
	env: {
		browser: true,
	},
	rules: {
		/** Eslint basic */
		"max-len": ["error", { "code": 100, "tabWidth": 2 }],
		"no-tabs": "off",

		/** Import options */
		"import/prefer-default-export": "off",
		"import/no-unresolved": "off",
		"import/no-default-export": ["error", "always"],
		"import/no-extraneous-dependencies": [
			"error", 
			{
				"devDependencies": [
					"webpack/**/*", 
					"index.js", 
					"dev.server.js",
					"src/**/*.story.tsx",
					"postcss.config.js"
				]
			}
		],

		/** React extension */
		"react/jsx-props-no-spreading": "off",
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-indent-props": ["error", "tab"],

		/** Typescript extension */
		"@typescript-eslint/no-use-before-define": "off",
		"@typescript-eslint/indent": ["error", "tab"],
		"@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }],
	}
}