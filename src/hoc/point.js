import React from 'react'
// 高阶组件：用于埋点
// 高阶组件(高阶函数)接收一个UI组件，作为入参
// react中做埋点就用高阶组件，在组件中调用某个api
// 高阶组件在工作中会很多，每个高阶函数代表一个小小的专用功能
function point(WrapComponent){
  
  return class extends React.Component{
    componentDidMount(){
      //调用埋点api
      console.log('埋点api已调用')
    }
    // 备案号
    renderFlag(){
      return(<div>备案号:京：ICP@ASDASD</div>)
    }
     render(){
       return(
         <>
          <WrapComponent point = 'point' {...this.props}/>
         </> 
       )
     }
  }
}

export default point