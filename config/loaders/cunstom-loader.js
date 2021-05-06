
//所有的loaders实际上就是函数
module.exports = function(str){
   const result = str.replace(/\#/img,'-')
  //  自定义loader需要的写法
   return `module.exports=${result}`
}