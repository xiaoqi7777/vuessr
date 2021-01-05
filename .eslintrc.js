module.exports = {
  parser: 'babel-eslint', // 把源码转成语法树的工具
  extends: 'airbnb', // 继承airbnb规则
  env: { // 指定运行环境
    browser: true,
    node: true,
  },
  rules: {
    'linebreak-style': 'off',
    indent: ['error', 2], // 缩进风格
    // quotes: ['error', 'double'], // 引号类型
    semi: ['error', 'always'], // 关闭语句强制分号结尾
    'no-console': 'error', // 禁止使用console
    'arrow-parens': 0, // 箭头函数用小括号括起来
    quotes: [
      1,
      'single',
    ],
  },
};
