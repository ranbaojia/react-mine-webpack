### react
你对webpack理解
webpacck怎么做性能优化
webpack构建速度如何提升

React(类组件，函数式组件Hooks)

React-Router / React-Raanning

Flux / facebook => Mobx / Redux  第三方开源的组织

UI框架 Ant-Design  难搞/Antd-Mobile
脚手架 create-react-app  dva umi   ES6 /TypeScript

React技术主管：
   React类组件也叫Jsx元素
   React-Router5 (api,hooks)两种写法
   状态管理(mobx,Redux)
   JS(ES6/TS)
   脚手架选择

定义类组件中有六个常用的生命周期， cunstructor render componentDidMount shouldComponentUpdate  componentDidupdate componentDidUpdate   
render(){return (<div />)} 



React 类也叫jsx元素（react元素）
jsx元素  let span =(<div />)  必须有一个根元素


组件导出  export default 默认导出
在App根组件中导入 import TestJsx 

根组件  class App extends React.Component{
  render(){
    return (
      <div><TestJsx /></div>
    )
  }
}

解决eslint可以用vue-element-admin中的editorconfig文件代码
### 如何理解jsx
+ 1、JSx = JavaScript XML，这是一种语法糖
+ 2、JSx语法，是可选的，但是React建议使用
+ 3、JSX语法，浏览器不支持，使用@babel/preset-react进行编译。Babel 会把JSX转译成一个名为React.createElement()函数调用。
+ 15、Jsx元素是不可变对象，Jsx需要更新的时候，我们的做法生成新的Jsx对象,重新调render方法并完成DOM渲染，react背后存在虚拟dom，也有diff运算
+ 不使用jsx该如何写
+ 4、JSX元素，是对象，也是变量，不是字符串
+ 5、Jsx可以任意嵌套，语法是使用{}包裹
+ 6、Jsx中使用{/**/}
+ 7、在jsx中，使用表达式，表达式要用{}包起来
+ 8、Jsx中动态属性,也要用{}
+ 9、在Jsx中的三个属性：className,forHTML,tabIndex(html中class,for,tabindex)
+ 10、在JSx中，新增属性有:key，ref，dangerouslysetInnerHTMLl
+ 11、Jsx可防注入攻击(XSS)
+ 12、自定义组件必须已大写字母开头
+ 13、jsx支持展开语法<Child {...obj} />
+ 14、jsx的文本渲染不包括布尔类型，null,undefined,


### 什么是jsx元素
+ jsx元素是Javascript XML,是一种语法糖，
+ jsx语法浏览器不支持，使用babel-preset-env进行编译，编译结果是React.createElement();
+ jsx是不可变对象，jsx需要更新的时候，会生成新的jsx对象，重新调render方法并完成DOM渲染，react背后存在虚拟dom'，使用diff运算进行优化
+ jsx是对象或者变量，但不能是字符串，
+ jsx可以防注入攻击
### jsx语法
+ 使用jsx元素的属性使用{}包起来，
+ jsx元素中动态属性也要用{}
+ jsx中使用表达式也要用{}包起来，但不能使用语句
+ jsx有三个属性，className，forHtml，tableIndex，
+ jsx必须以大写字母开头
+ 新增属性有key，ref等
+ jsx中使用{/**/}包起来



```js
//React元素
const MyH1 = React.createElement(type,json,...a)
class App extends React.Component{
  render(){
    return (
      //最外层必须只有一个元素
      <div>{<MyH1 />}</div>
    )
  }
}
非jsx的元素
const MyH1 = React.createElement('h1',{id:'box'},[...children])

const child = React.createElement('a',{href:"http://baidu.com"},'百度')
const Father = React.createElement('h1',{id:'box'},[child,child,child])

jsx元素语法
const ele=(
  <h1>
   <a href="http://baidu.com"></a> 
   <a href="http://baidu.com"></a> 
   <a href="http://baidu.com"></a>
  </h1>
)
```
```js
jsx可以任意嵌套，语法{包裹}
const ele=(
  <h1 id ='box'>
  {<a href="http://baidu.com"></a> }
  {<a href="http://baidu.com"></a> }
  {<a href="http://baidu.com"></a> }
  </h1>
)
```
```js
jsx注释
const ele=(
  <div id ='box'>
  {/* 这是注释*/}
  {/*
  {<a href="http://baidu.com"></a> }
  {<a href="http://baidu.com"></a> }
  */}
  {<a href="http://baidu.com"></a> }
  <h1 title={'abc'}></h1>
  </div>
)

function listRender(){
  return ([ele,ele,ele])
}

防xss原理，在渲染之前变成字符串




