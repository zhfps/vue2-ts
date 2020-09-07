module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/strongly-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off'
  }
}
