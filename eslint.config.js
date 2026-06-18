import cspellPlugin from '@cspell/eslint-plugin'
import * as config from '@lvce-editor/eslint-config'
import * as actions from '@lvce-editor/eslint-plugin-github-actions'

const cspellOptions = config.default.find((item) => item.rules?.['@cspell/spellchecker'])?.rules['@cspell/spellchecker'][1]

export default [
  ...config.default,
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
    files: ['**/*.ts'],
    plugins: {
      '@cspell': cspellPlugin,
    },
    rules: {
      '@cspell/spellchecker': [
        'error',
        {
          ...cspellOptions,
          cspell: {
            ...cspellOptions.cspell,
            words: [...cspellOptions.cspell.words, 'barfoo', 'barfoobar', 'Iconreplace', 'offscreencanvas'],
          },
        },
      ],
    },
  },
]
