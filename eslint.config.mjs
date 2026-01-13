import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,jsx}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { globals: globals.browser },
    rules: {
      "no-console": "warn",
      "no-unused-vars": "warn",
      eqeqeq: "warn",
      "no-var": "warn",
      camelcase: "warn",
    }
    
  },
  pluginReact.configs.flat.recommended,
]);
