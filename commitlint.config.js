/**
 * Convention de commits Finéo — Conventional Commits.
 * Règles identiques au dépôt fineo-backend. Format attendu :
 *
 *   <type>(<scope>): <description>
 *
 * Le scope est optionnel. La description est en français, à l'impératif,
 * en minuscules et sans point final.
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'perf',
        'refactor',
        'test',
        'docs',
        'style',
        'build',
        'ci',
        'chore',
        'revert',
      ],
    ],
    'header-max-length': [2, 'always', 72],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'scope-case': [2, 'always', 'lower-case'],
  },
};
