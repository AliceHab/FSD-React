import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import i18next from 'eslint-plugin-i18next'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      js,
      react: pluginReact,
      i18next: i18next,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...i18next.configs['flat/recommended'].rules,
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      // parserOptions: {
      //   project: './tsconfig.json',
      //   tsconfigRootDir: new URL('.', import.meta.url).pathname,
      // },
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      'no-unused-vars': 'warn',
    },
  },
  {
    files: [
      '**/*.config.{js,ts,mjs,cjs}', // Webpack, Vite, ESLint and others configs
      '**/config/**/*.ts',
      '**/scripts/**/*.ts',
    ],
    languageOptions: {
      globals: globals.node,
    },
  },
])
