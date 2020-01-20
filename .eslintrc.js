module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': 0,
    'no-debugger': 0,
    'indent': 0, // 缩进
    'vue/script-indent': ['error', 4],
    'eqeqeq': 0, // 全等
    'camelcase': 0, // 驼峰
    'no-tabs': 0, // tab键空格
    'handle-callback-err': 0, // catch回调的error入参，未处理
    'vue/no-use-v-if-with-v-for': 0,
    'vue/require-valid-default-prop': 0, // props默认值，用函数返回
    'arrow-parens': ['error', 'as-needed'], // 箭头函数中，只有一个参数时，在参数外不使用小括号
    'arrow-spacing': ['error', { 'before': true, 'after': true }], // 箭头函数中的箭头前后需要留空格
    'vue/require-v-for-key': 0,
    'space-before-function-paren': 0,
    'no-multi-spaces': 0,
    'eol-last': ['error', 'never'],
    'no-new': 0,
    'no-undef': 0,
    'no-trailing-spaces': ['error', { 'skipBlankLines': true }],
    'one-var-declaration-per-line': ['error', 'initializations']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}