import React from 'react'

// 权限管理
// 粗粒度的权限管理：页面级别的权限管理
// 细粒度的权限管理：页面元素级别的权限管理
export default roleArr =>WrapComponent=>{
  return class extends React.Component{
    constructor(props){
      super(props)
      this.state={
        role:'admin'
      }
    }
    // 如有需要，可以在这里调用接口函数从而做权限管理
    componentDidMount(){
      //  $api({}).then(
      //    this.setState({list})
      //  ) 
    }
    render(){
      let {role} = this.state
      return(
        <div>
          {roleArr.includes(role)&&<h1>允许被admin看到</h1>}
          <WrapComponent {...this.props}/>
        </div>
      )
    }
  }
}