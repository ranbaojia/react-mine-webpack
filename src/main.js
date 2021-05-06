// /* eslint-disable */
console.log('------',process.env.NODE_ENV)
import React from 'react'   //chunk公共文件
import ReactDOM from 'react-dom'
// //需要style-loader css-loader
import '@/assets/style.less'
import App from './App'
// // 实例化组件
ReactDOM.render(<App />, document.getElementById('app'))