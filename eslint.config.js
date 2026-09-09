// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const eslintConfigPrettier = require('eslint-config-prettier');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*', '.expo/*', 'node_modules/*'],
  },
  // TOUJOURS EN DERNIER : éteint les règles de style d'ESLint pour laisser
  // Prettier seul maître de la forme.
  eslintConfigPrettier,
]);
