// process.env进程对象
const NODE_ENV = process.env.NODE_ENV
const { merge } = require('webpack-merge')
const common = require('./base')
const dev = require('./dev.js')
const build = require('./build.js')
console.log(NODE_ENV)
module.exports = ()=>{
   // 区分生产环境和开发坏境
   if(NODE_ENV==='development'){
     return merge(common, dev)
   }else{
     return merge(common, build)
   }
}