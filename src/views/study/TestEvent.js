import React from 'react'

// 不推荐事件处理函数写在外面、
// function handle(){
//   console.log('点击')
// }
export  class _ extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      count:1,
      name:''
    }
  }
  handle(){
    this.setState({ count:state.count+1})
    console.log('点击')
  }
  keyuphandle(e){
    console.log('表单',e)
    if(e.keyCode===13){
      console.log('你点击了enter键',this.state.name)
    }
  }
  render(){
    let {count,name} = this.state
    return(
      <div>
        <h1>测试事件绑定</h1>
        <h2></h2>
        <button onClick={this.handle.bind(this)}>点击</button>
        <br />
        <hr />
        <input 
        onChange = {e =>this.setState({name:e.target.value})}
        onKeyUp={(e)=>this.keyuphandle(e)}
        />
      </div>
    )
  }
}


// 自定义子组件
const Child = props =>(
  <div>
    <button onClick={()=>props.onTest(1000)}>我是child组件</button>
    {props.c1}
  </div>
  
)
function handle(a,b,e){
  console.log('点击1')
  console.log('点击3',a,b,e)
}
export default ()=>{
  const fn=()=>{
    console.log('点击2')
  }
  const onEv=(a)=>{
    console.log('我在测试自定义事件',a)
  }
  return(
    <div>
        <h1>测试事件绑定</h1>
        <h2></h2>
        <button onClick={handle}>点击1</button>
        <button onClick={fn}>点击2</button>
         {/* 事件对象的处理方法 */}
         {/* <button onClick={(e)=>{handle(1,2,e)}}>点击3</button> */}
        <br />
        <hr />
        {/* 给自定义子组件自定义事件，也要遵从on+MyEvent小驼峰命名方式 */}
        <Child  onTest={onEv} c1={<div>子组件中的组合组件</div>}/>
    </div>
  )
}