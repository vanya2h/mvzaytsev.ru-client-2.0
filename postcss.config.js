import { paths } from "./config";
import createResolver from "postcss-import-webpack-resolver";

module.exports = {
  plugins: {
    "postcss-import": {
      resolve: createResolver({
        alias: {
          "~": paths.sourceDir
        }
      })
    },
    "postcss-nesting": {},
    "postcss-custom-media": {
      importFrom:  "./src/css/media.json"
    },
    "postcss-custom-properties": {
      preserve: false
    },
    "postcss-calc": {},
    "postcss-color-function": {},
    "postcss-selector-matches": {},
    "postcss-flexbugs-fixes": {},
    autoprefixer: {},
    "postcss-csso": {}
  }
};
