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