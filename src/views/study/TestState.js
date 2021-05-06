import React from 'react'

export default class TestState extends React.Component{
  constructor(props){
    super(props)
   //在构造器中定义state
   this.state={
     count:1
   }
   this.timer=null;
  }
  add(){
    //当我们在修改state变量，如果新值是由旧值计算而来，不能这样写，官网，复杂代码会出现shujubug
    // 错误
    // this.setState({count:++count})
    // 当我们在修改state变量时，如果新值是由旧值计算而来，应该这样写

    // [correct]
    // this.setState(function(state,props){
    //   return {count:state.count+1}
    // })
    // [correct]
    clearInterval(this.timer)
    this.timer=setInterval(()=>{
      this.setState(state=>{
        return {count: state.count+1}
        },()=>{
        if(this.state.count>10){
          clearInterval(this.timer)
        }
    })
    // console.log(this.state.count);
    // if(this.state.count>=100){
    //   clearInterval(this.timer)
    // }
    },1000)
    // [correct]
    // this.setState({count:1000},()=>{
    //   console.log('count已经修改完成',)
    // })
  }
  render(){
    return (
      <div>
        <h1>学习state</h1>
        <h1>{this.state.count}</h1>
        <div onClick={(e)=>{this.add(e)}}>测试事件</div>
      </div>
    )
  }
}