import React from 'react'
export default WrapComponent=>{
  return class extends React.Component{
    renderICP(){
      return(<div>备案号:京：ICP@ASDASD</div>)
    }
    render(){
      // props需要手动传输{...this.props},保留props，当一个ui组件被多个高阶组件修饰，props会丢失
      console.log('props',this.props)
      return(
       <>
        <WrapComponent icp='icp' {...this.props} child={<div>render.props</div>}/>
        {this.renderICP()}</>
      )
    }
  }
}

// 细粒度权限管理，有些角色可以操控这个按钮，有些角色不可以

