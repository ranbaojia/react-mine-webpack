import React from 'react'

class Tchild extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      t:0
    }
  }
  changeF(e){
   let {change} = this.props
   this.setState(state=>({t:e.target.value}),()=>{
    const val = Number(e.target.value)+30;
    e.target.detail = val
    change&&change(e)//父组件非必传事件
    // 给父组件传值使用this.props.change('任意参数')
   })
  

  }
  render(){
    let {t} = this.state;
    return(
      <div>
        <h3>摄氏温度:</h3>
        <input
          value={t}
          onChange = {(e)=>{this.changeF(e)}}
        />
      </div>
    )
  }
}


const Fchild = props=>{
    return(
      <div>
        <h3>华氏温度:</h3>
        <h3>{props.tf}</h3>
      </div>
    )
}
export default class extends React.Component{
   constructor(props){
     super(props)
     this.state={
       tf:0
     }
   } 
   changeForm(e){
     this.setState({tf:e.target.detail})
   }
   render(){
     let {tf} = this.state
     return(
       <div>
          <Tchild change={(e)=>{this.changeForm(e)}}/>
          <Fchild tf={tf}/>
       </div>
     )
   }
}