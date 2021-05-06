import React from 'react'

export default class extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name:'',
      age:'',
      school:'地质大学',
      pass:'',
      gender:'1',
      desc:'',
      checkedArr: [1,2],
      cateSelected: [1]
    }
  }
  formChange(e,k){
    console.log(e,k)
    if(!k){
      this.setState({[e.target.name]:e.target.value})
    }
  }
  submit(){
   
    const data={
      name:document.getElementById('name'.value),
      mobile:this.refs.mobile.value,
      pass:pass,
      age
    }
    console.log('提交',data)
  }
  render(){
    let {desc,age,school,pass,gender} = this.state
    return (
      <div>
        <h1>表单绑定</h1>
        {'-------------------非受控表单----------------------'}
        <input  type='number' defaultValue={age}  onInput ={e=>this.setState({age:e.target.value}) }/>
        <br/>
        {/* 非受控表单，这是React唯一允许的写法*/}
        <br/>
        <br/>
        <br/>
        {'-------------受控表单 变成受控表单需要加onChange事件-------------'}
        <span>学校：</span>
        <input 
         type='text' 
         name = 'school'
         value={school}
         onChange={e=>this.setState({school:e.target.value})} 
        />
        <span>简介：{desc}</span>
        <textarea 
        name='desc'
        value={desc}
        onChange={e=>this.setState(e=>{this.formChange(e)})} 
        />
        {/* 怎么变受控表单用checked */}
        {/* <span>性别：</span>
        <input value='1' type='radio' checked={gender==='1'}/>
        <input value='2' type='radio' checked={gender==='2'}/> */}
      </div>
    )
  }
}