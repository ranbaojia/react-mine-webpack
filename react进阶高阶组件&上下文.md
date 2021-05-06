### 上下文Context
> Context 提供了一个无需为每层组件手动添加props，就能在组件树间进行数据传递的方法。
父子组件，叔侄，爷孙组件任意组件不用再通过繁琐的通过props操作进行传递
> 类似vue中的vue.prototype.config,是死的，自上而下注入数据，你改不了,你只配用
> 怎么使用上下文，两个重要的单词provider供应者，consumer消费者
```js
// 1、使用const ctx=React.createContext()创建上下文对象
// 2、使用上下文对象上的<ctx.Provider value={}><ctx.Provider>供应者,向React组件树注入数据
// 3、使用上下文对象上的<ctx.Consumer>{()=>()}</ctx.Consumer>，中间必须用函数返回对应组件内容
```
### 子孙无法通过api修改提供者的值

> 上下文在那些第三方库中会用到呢？React-Router,mobx,Redux
使用consumer里面
```js
export default class extends React.Component {
  render( {
    return (
    <ThemeCtx.Consumer>
      {(theme)=>(
        <div style={{background: theme.background,color:theme.color}}>
      <h1>测试上下文</h1>
        </div>
      )
      }
  </ThemeCtx.Consumer>
  )
}
)}
```
### 高阶组件
>高阶组件(HOc)是React 中用于复用组件逻辑的一种高级技巧。HOC自身不是 React API的一部分，它是一种基于React的组合特性而形成的设计模式。
>原则：不要对原有组件修改
>注意：高阶组件的 props需要手动传输{...this.props},保留props，当一个ui组件被多个高阶组件修饰，props会丢失
<!-- 面试：你对对高阶组件的理解 -->
结合了react的很多特性，函数-高阶函数，第三方库
二、应用
-容器组件-修饰UI组件，包裹和修饰，追加属性，添加相关的操作，埋点
三，工作中使用高阶组件解决过什么问题
可以做权限管理，全局的api注入,使用高阶组件的上下文



