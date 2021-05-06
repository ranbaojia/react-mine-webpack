// React组件(类，图纸)
// React组件实例化后得到jsx元素
//如何定义组件
// 1、类组件
// 2、函数式组件(无状态组件,纯组件、PureComponent)
// 类组件要用class来定义，他有state状态，有生命周期，有this，有ref，有上下文
// 类组件的缺点是运行速度相对较慢，性能较差
// 函数式组件，默认啥都没有，也就是说默认没有类组件那些特性。函数式组件的特点运行速度较快
//，性能更好(使用hooks Api可以模拟出像类组件一样的众多特性)
// import React from 'react'
import React,{Component} from 'react'
// 类组件
export  class TestComponent extends Component{
  constructor(props){
    // 调用父类(父组件)的构造器，必须是第一行代码
  super(props)
  this.state={
    count:1
  }
  }
  componentDidMount(){
    console.log('this',this)
  }

    render(){
      let {count} = this.state
      return (
        <div>
          <h1>测试类组件</h1>
          <h1>{count}</h1>
        </div>
      )
    }
}
// 函数式组件
// 本质上是一个纯函数,它的特点是不能修改入参props，唯一的输入永远得到唯一的输出
export default function TestComponent2(props){
  console.log('props',props,'this',this)
  return (
  <div>
    <h1>测试函数式组件</h1>
  </div>
  )
}
