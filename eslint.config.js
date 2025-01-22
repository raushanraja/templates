import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import typescriptEslint from "@typescript-eslint/eslint-plugin";


/** @type {import('eslint').Linter.Config[]} */
export default [
    { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
    {
        plugins: {
            typescriptEslint,
        }
    },
    {
        ignores: ['node_modules', 'dist', 'public', 'src-tauri']
    },
    { files: ["**/*.{js,mjs,cjs,ts}"] },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
];
