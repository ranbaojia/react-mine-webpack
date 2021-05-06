import React from 'react'
const Child = ()=><div>child</div>
export default class extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      list:[
        {id:1,task:'吃饭'},
        {id:2,task:'睡觉'},
        {id:3,task:'游戏'},
        {id:4,task:'跑步'}
      ]
    }
  }
  renderList3(state){
    state.list.map(ele=>(
      <div key={ele.id}>
      <span>{ele.id}</span>
      <span>----</span>
      <span>{ele.task}</span>
      </div>
    ))
  }
  render(){
    let {list} = this.state
    const arr =[
      list.map(ele=>(
        <div key={ele.id}>
          <span>{ele.id}</span>
          <span>----</span>
          <span>{ele.task}</span>
        </div>
      ))
    ]
    return (
      <div>
        <h1>列表渲染</h1>
        {/* 列表循环的四种写法 */}
        {/* 列表循环的JSX语法基础 */}
        { 
        [
          <div key='1'>111</div>,
          <div key='2'>222</div>,
          <Child />,
          'hello world',
          true,
          null,
          <div>333</div>
        ]
      }
      {/* 列表渲染的第一种写法，返回值数组 不推荐*/}
      {'--------------第一种------------------'}
      {
          list.map(ele=>{
          return <div key={ele.id}>
            <span>{ele.id}</span>
            <span>----</span>
            <span>{ele.task}</span>
           </div>
          })
      }
      {/* 第二种写法 箭头后跟括号 */}
      {'--------------第二种------------------'}
      {
        list.map(ele=>(
          <div key={ele.id}>
            <span>{ele.id}</span>
            <span>----</span>
            <span>{ele.task}</span>
          </div>
        ))
      }
      {this.renderList3}
      {/* 第三种写法 经常用到*/}
      {'--------------第三种------------------'}
      {arr}
      </div>
    )
  }
}