module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'eslint-config-prettier'
  ],
  settings: {
    react: { version: '16.13.1' }
  },
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  parser: 'babel-eslint',
  rules: {
    'react/prop-types': 0
  }
}
