// eslint的规则，是一种代码规范的检测工具
// 社区里有很多种不同版本的eslint检测工具，
// 比如常用的eslint eslint-babel、eslint-config-airbnb eslint-plugin-jsx-a11
// 在webpack中有两种写法
// 1、eslint-loader，不推荐
// 2、使用eslint-webpack-plugin插件来集成ESLint
// ESLint检测结果三种情况error,warning,
module.exports = {
	parser: "@babel/eslint-parser",
	extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  parserOptions: {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true
      }
  },
	plugins: [
    "react"
  ],
	env: {
    "browser": true,
    "node": false,
		"es6": true
  },
	// 定义规则检测的级别
  rules: {
      // "semi": "error"
			"no-console": "off",
			"react/display-name": 0,
			"react/no-direct-mutation-state": 0,
			"react/prop-types": "off",
			"react/no-string-refs": 0,
			"no-case-declarations": 0,
      "no-unused-vars":'off',
      "no-unused-vars":0,
      "no-undef": 0
  }
}
