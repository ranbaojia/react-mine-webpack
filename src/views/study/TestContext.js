import React from 'react'
import Ctx from '@/utils/ctx'
import FormCtx from '@/utils/FormCtx'
 class Test extends React.Component{
  render(){
    return(
      <Ctx.Consumer>
        {data=>(
          <div style={{background:data.background,color:data.color}}>
            <h1>测试上下文</h1>
          </div>
          
        )}
      </Ctx.Consumer>
    )
  }
}

export default class extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data:{
        background:'#ff2200',
        color:'#000'
      }
    }
   }
   change(data){
    this.setState({data})
  }
  render(){
    let {data} = this.state
    return(
       <Ctx.Provider 
        value = {data}
      
        >
            <Test/>
            <FormCtx
              data={data}
              onChange={(data)=>{this.change(data)}}
            />
        </Ctx.Provider>
    )
  }
}