import React from 'react'
import Ctx from '@/utils/ctx'
// 描述：通过高阶组件来消费上下文的换肤状态
export default WrapComponent=>{
  return class extends React.Component{
    render(){
      return(
        // 以后其他组件想用直接@context就有了上下文
        <Ctx.Consumer>
          {
          data=>(
            <div style={{color:data.color,background:data.background}}>
              <WrapComponent {...this.props} data={data}/>
            </div>
          )
          }
        </Ctx.Consumer>
      )
    }
  }
}
