module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-idiomatic-order',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'selector-class-pattern': null,
  },
}
