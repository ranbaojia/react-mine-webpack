import React from 'react'

export default class extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      bol1:true,
      bol2:true
    }
    this.miss = this.changeMiss.bind(this)
  }
  changeMiss(){
     this.setState(state=>({bol1:!state.bol1}))
  }
  render(){
    let {bol1,bol2} = this.state
    return(
      <>
       <h1></h1>
       <hr/>
       {/* render这种需要props和state进行渲染的的方法找那个，不能再对props和state进行更新，也就是this.setState不能用作事件处理函数 */}
       
       {
         bol1&&<div>我是一个可有可无的人</div>
       }
       <button onClick={this.miss}>显示/影藏</button>
       <button onClick={e=>this.setState(({bol2:!bol2}))}>显示/影藏</button>
       {bol2?<div>11111</div>:<div>2222</div>}
      </>
    )
  }
}