const createResolver = require("postcss-import-webpack-resolver");
const { paths } = require("./config");

module.exports = {
	plugins: {
		"postcss-import": {
			resolve: createResolver({
				alias: {
					"~": paths.sourceDir,
				},
			}),
			plugins: [
				// eslint-disable-next-line
				require("stylelint")({ /* your options */ }),
			],
		},
		"postcss-nesting": {},
		"postcss-custom-media": {
			importFrom: "./src/css/media.json",
		},
		"postcss-custom-properties": {
			preserve: false,
		},
		"postcss-calc": {},
		"postcss-color-function": {},
		"postcss-selector-matches": {},
		"postcss-flexbugs-fixes": {},
		autoprefixer: {},
		"postcss-csso": {},
	},
};
