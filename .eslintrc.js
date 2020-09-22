module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    "no-console": "off",
    "vue/no-v-html": "off",
    "vue/html-self-closing": "off",
    "nuxt/no-timing-in-fetch-data": "off",
    "no-useless-catch":"off",
    "vue/require-component-is":"off",
    "quotes":"off",
    "lines-between-class-members":"off",
    'vue/singleline-html-element-content-newline': 'off',
'vue/multiline-html-element-content-newline': 'off',
"comma-dangle":"off",
"eol-last":"off"
  }
}
