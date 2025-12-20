// ========================================
// IMPORTS
// ========================================
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintConfigPrettier from 'eslint-config-prettier';

// ========================================
// CONFIGURAÇÃO ESLINT
// ========================================
export default tseslint.config(
  // Ignora arquivos de build e configuração
  {
    ignores: ['dist', 'node_modules'],
  },

  // ========================================
  // CONFIGURAÇÃO BASE
  // ========================================
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      eqeqeq: 'warn',
      'no-console': 'warn',
    },
  },

  // ========================================
  // CONFIGURAÇÃO TYPESCRIPT
  // ========================================
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx,mts,cts}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn', // Avisa ao usar 'any'
    },
  },

  // ========================================
  // CONFIGURAÇÃO REACT
  // ========================================
  {
    files: ['**/*.{jsx,tsx}'],
    ...react.configs.flat.recommended,
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // React
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      // React Hooks
      ...reactHooks.configs.recommended.rules,

      // React Refresh
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },

  // ========================================
  // PRETTIER
  // ========================================
  eslintConfigPrettier
);
