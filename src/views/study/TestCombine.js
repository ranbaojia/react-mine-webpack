import React from 'react'

const QfModel = ()=>{
  return (
    <div className='layer'>
        <div className='qf-model'> 
          <div className='header'>
            <span className='tip'>提示</span>
            <span className='close'>X</span>
          </div>
          <div className='body'>
            <div className='wrap'></div>
          </div>
          <div className='footer'>
            <span className='cancal'>取消</span>
            <span className='confirm'>确定</span>
          </div>
      </div>
    </div>
    
  )
}
export default class extends React.Component{
  click(){

  }
  render(){
    return(
      <>
      <h3>测试组合</h3>
      <button onClick={()=>this.click()}></button>
      <QfModel/>
      </>
    )
  }
}


