import React from 'react'
import {point,icp,context,role,config} from '@/hoc'
// 高阶组件
// 高阶组件、高阶函数，本质上是一个纯函数，
// 高阶组件也被称为容器组件，是用来修饰，装饰UI组件的
// 语法：hocFn(UIComponent){return NewUIComponent}
// react中做埋点就用高阶组件，在组件中调用某个api
// 使用原则，一个高阶组件，一般只复用一个可以复用的逻辑
// @context
// @icp
// @point
@context
@icp
@point
@role(['admin'])
@config
class TestHoc extends React.Component{
  render(){
    console.log('props',this.props)
    return(
      <div>
        <h1>测试高阶组件</h1>
      </div>
    )
  }
}
export default TestHoc
