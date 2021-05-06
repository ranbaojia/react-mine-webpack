import React from 'react'
const a = <a href="http://baidu.com"><span>百度</span></a>
const tit = '我是一张图'

function listRender(){
  const arr =[]
  for(let i =0;i<3;i++){
    arr.push(<span key={i}>{a}</span>)
  }
  return arr
}

const ele =(
  <div>
    {a}
  </div>
)

const attr ={
  id:'hehe',
  // title: 'hehe',
  className: 'hehe'
}
const Jia=<div title={tit} {...attr}>贾存庆</div>
// jsx类组件，有六个生命周期
class TestJsx extends React.Component{
  constructor(props){
      super(props)
      //声明式变量发生变化时视图自动更新(单向绑定)
      this.state = {
        list:[
          {id:1,task:'吃饭'},
          {id:2,task:'睡觉'}
        ],
        task: ''
      }
  }
  add(e){
     if(e.keyCode == 13){
       // 在React中，修改声明只能用setState
       this.setState({
         task:'',
         list:[...this.state.list,{id:Date.now(),task:this.state.task}]
       })
      }
  }
  render(){
    console.log('this.props',this.props)
    return (
      <div> 
        {/* {ele} */}
        {a}
        {listRender()}
        {Jia}
        <input 
        type='text'
        value = {this.state.task}
        //修改声明只能用setState
        onChange={(e)=>this.setState({task: e.target.value})}
        onKeyUp={(e)=>this.add(e)}
        />
        {
        this.state.list.map(ele=>(
          <div key = {ele.id}>
          <span>{ele.id}</span>
          <span>---</span>
          <span>{ele.task}</span>
         </div>
        )
          
        )
        }
      </div>
    )
  }
}

export default TestJsx