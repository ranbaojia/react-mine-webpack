###  Flux数据架构思想

### 库mobx-react 7版本只支持mobx6
mobx

在vue中可以直接在页面修改state或者
在actions直接修改state(devtool没变化)

### mobx使用
npm i mobx -S
npm i mobx-react -S
>定义store
class Srore{
  constructor(){
    this.todo = new TodoStore()
  }
}
定义子store
class ToDoStore{
  consturctoe(){
    makeObservable(this,{
      msg:observable,
      changeMsg:action,
      length:conputed
    })
  }
}

连接Mobx和React应用
function App(){
  return (
    <Provider {...store}></Provider>
  )
}

在React组件中使用Mobx

今日任务
路由数据处理
音乐列表调用
mobx6的使用
受控表单

react-use
create React App脚手架搭建

npm i create React App -g

npm run eject  暴露操作
先提交git

react-dev-utils自己搭环境的调试工具

研究mock怎么玩

安装mobx mobx以及mobx-react
### 定义主store
```js
class Srore{
  constructor(){
    this.todo = new ToDo()
  }
}
```

### 定义状态管理子模块
```js
import {makeObservable,action,computed,observable} from 'react-router-dom'

class ToDo{
  constructor(){
    makeObservable(this,{
      msg: observable,
      changeMsg:action
    })
  }

  msg='hello everyone'
  changeMsg(msg){
     this.msg = msg
  }
}
```
### 定义Provider提供者
类似高阶组件Hoc上下文的应用，引入store，注入Provider，供能拿到的组件使用
```js
import { Provider } from 'mobx-react'
<App>
   <Router>
      <Provider {...store}>
          <Layout></Layout>
      </Provider>
   </Router>
</App>
```
### 组件使用
```js
import React from 'react'
import {observer,inject} from 'mobx-react'
//状态管理
//Flux(是一套数据架构的思想)是Facebook提出的。flux的数据架构
//Vuex,Mobx,Redux他们是Flux思想指导下的一种具体的解决方案
//状态管理工具，可预测状态的数据容器
// React技术栈，mobx和redux
// 一般情况下，小项目可以考虑使用mobx&mobx-react
// 如果是大项目，建议使用redux & react-redux
// 在React原则上，一切外部数据都要通过props进入组件，所以几乎是一定要使用状态管理工具.
// mobx版本迭代 
// 如果是类组件用@装饰器@observer
// 语法:inject(observer('store')(UIComponent))
// observer(UIcomponent)把react组件变成观察者，当mo
// inject('store')(UIComponent)注入mobx中的状态数据
// 特点，一旦注入成功，在props就可以直接访问
// 按需注入怎么做
export default inject('todo')(observer((props)=>{
   console.log('props',props)
   let {todo} = props
   return(
     <div
     onClick={()=>{todo.changeMsg('我爱你')}}
     style={{color:'red'}}
     >{todo.msg}</div>
   )
}))

```


