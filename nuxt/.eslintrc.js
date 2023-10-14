module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended'
  ],
  plugins: ['vue','@typescript-eslint'],
  // add your custom rules here
  rules: {
    // 'vue/valid-attribute-name': 'off'
  },
  overrides: [
    {
      files: ['pages/*.vue', 'pages/**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 'off'
      }
    }
  ]
}
