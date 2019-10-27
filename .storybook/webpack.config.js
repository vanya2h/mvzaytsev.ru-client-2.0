const path = require("path");
const appConfig = require("../config").config;

module.exports = ({ config }) => {
  config.entry.push(
		path.resolve(
			appConfig.paths.rootDir, 
			`${appConfig.paths.sourceDir}/css/global.css`,
		)
	);

  const cssRule = config.module.rules.find(rule => {
    return rule.use.find(option => {
      if (typeof option === "string") {
        return option.match(/style-loader/);
      }
    });
  });

  cssRule.use = [
    "style-loader",
    {
      loader: "css-loader",
      options: {
        modules: true
      }
    },
    {
      loader: "postcss-loader",
      options: {
        config: {
          path: path.join(appConfig.paths.rootDir, "postcss.config.js")
        }
      }
    }
  ];

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("ts-loader"),
        options: {
          transpileOnly: true,
          configFile: path.join(appConfig.paths.rootDir, "tsconfig.json")
        }
      }
    ]
  });

  config.resolve.alias["~"] = path.join(appConfig.paths.rootDir, "src");

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
