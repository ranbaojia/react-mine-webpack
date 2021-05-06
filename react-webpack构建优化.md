### 构建优化
+ 公共的第三方，比如react，打包的时候要和我的业务代码抽离，
+ 开发环境以及生产环境的业务逻辑分离以及帮助可视化工具
```js
// 可使用的代码分离的可视化帮助  bundle分析
// webpack-chart:webpack stats可交互饼图
// webpack-bundle-analyzer:一个plugin和CLI工具，它将bundle内容展示为一个便捷的交互式、可缩放的树状图形式
```
+ 提取公共chunk优化，可将公共的文件分离优化，在webpack中chunk没有名字，就用id做名字,chunk的配置字段以及分成多个chunk文件，dev以及build优化
+ 找包的时候浪费时间，因为node环境里找包('没有/的包')顺序是先找node本身的包，在找当前文件夹下有没有这个包，最后找node_modules,node_modules没有就在全局寻找，在resolve里增加别名，dev优化
```js
resolve:{
  //别名设置
  alias:{
    // 加速第三方包的查找速度
    ' react' : path.resolve(__dirname,'../node_modules/react/cjs/react.developmlent.js'),
  },
}
```
+ mode = production本身就是一种代码量的优化，但是这种默认的压缩，我们可以使用第三方库进一步压缩uglifyjs-webpack-plugin 最少化你的代码
+ 开启babel缓存，我们只对js文件开启缓存，对babel-loader缓存，dev优化
```js
//对babel开启缓存，还有的第三方库把无用的js代码剥离掉
options: {
  cacheDirectory: true
  }
```
+ babel-loader可以开缓存优化
+ 首先压缩也算优化，压缩css的文件CssMinimizerPlugin;剥离css中为无用代码，bulid优化
+ HappyPack,很有意思的webpack插件，开启多线程构建，加快速度，dev优化，大型项目优化
+ eslint代码优化，没有用到的东西就报错，报错本身就是一种优化，代码层面的优化
### loader如何构建
+ 在main.js中引入文件import txt from '@/assets/abc.txt';
+ 需要在config.js中定义规则
```js
//所有loaders实际上就是函数
module.exports = function(src) {
const result = src.replace(/\#/img, '-')

return module.exports ={ ${ JSON.stringify(result)}}

```
```js
  // 
  { test:/\.txt$/, use:[{loader:path.resolve(__dirname,'./cunstom-loader.js')}]},
```
### 疑问点，mode=production
```js
// 干嘛的 抽离react代码的工具
  optimization: {
    splitChunks: {chunks: "all"}
  }
```
+ js是如何构建多线程的
+ babel,@babel/core ,@babel/core,@babel/preset-env

### 老师翻车记录
+ 提取公共chunk优化以及chunk文件如何改名
  ```js
  chunkFilname:'chunk.js'
  ````
+ chunk抽离的文件到底是啥
+ 自定义loader翻车，怎么根据webpack部署目标(target)


代码层面优化  剥离css，js，压缩css，js，静态资源图片压缩和处理
webpack层面优化  exclude:/node_modules include.....
部署优化，云服务加速