import * as config from '@lvce-editor/eslint-config'
import * as actions from '@lvce-editor/eslint-plugin-github-actions'

export default [
  ...config.default,
  ...config.recommendedVirtualDom,
  ...actions.default,
  {
    ignores: ['**/server/**', '**/e2e/**', '**/memory/**'],
  },
  {
    rules: {
      'no-constant-condition': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/prefer-readonly-parameter-types': 'off',
      'no-useless-escape': 'off',
      'no-restricted-syntax': 'off',
    },
  },
  {
    files: ['packages/find-widget-worker/src/parts/**/*.ts'],
    ignores: ['packages/find-widget-worker/src/parts/**/*VirtualDom/**/*.ts'],
    rules: {
      'virtual-dom/prefer-state-destructuring': 'off',
    },
  },
  {
    files: ['packages/find-widget-worker/test/**/*.ts'],
    rules: {
      'virtual-dom/no-inline-event-handlers': 'off',
      'virtual-dom/prefer-constants': 'off',
      'virtual-dom/prefer-merge-class-names': 'off',
      'virtual-dom/prefer-state-destructuring': 'off',
      'virtual-dom/valid-child-count': 'off',
    },
  },
]
