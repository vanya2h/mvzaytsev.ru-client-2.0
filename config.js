const path = require("path");

const rootDir = path.resolve(__dirname);

const paths = {
	rootDir,
	sourceDir: path.join(rootDir, "src"),
	buildDir: path.join(rootDir, "build"),
};

module.exports.paths = paths;

const config = {
	devServerPort: parseInt(process.env.PORT, 10) || 3000,
	nodeEnv: process.env.NODE_ENV || "production",
	paths,
};

module.exports.config = config;
