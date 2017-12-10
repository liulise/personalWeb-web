module.exports = {
  'extends' : 'airbnb-base',
  'parser' : 'babel-eslint',

  'rules': {
    'no-undef': 'off',

    'linebreak-style': 'off',

    'no-multi-spaces': 'off',

    'import/no-extraneous-dependencies': 'off',

    'import/no-unresolved': 'off',

    'global-require': 'off',

    'no-console': 'off',

    'no-unused-vars': 'error',

    'brace-style': ['error', 'allman', { 'allowSingleLine': true }],
  }
};