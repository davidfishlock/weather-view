import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import pluginReactJSX from "eslint-plugin-react/configs/jsx-runtime.js";

export default [
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  pluginReactConfig,
  pluginReactJSX,
  ...tseslint.configs.recommended,
];