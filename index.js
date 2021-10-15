module.exports = {
  extends: 'stylelint-config-standard',
  plugins: ['stylelint-order'],
  rules: {
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-order': ['width', 'height'],
  },
  ignoreFiles: [
    '**/*.js',
    '**/*.cjs',
    '**/*.mjs',
    '**/*.json',
    '.*.js',
    '.*.cjs',
    '.*.mjs',
    '.*.json',
    '.*',
    'dist',
  ],
};
