import { inject,observer } from 'mobx-react'
import React from 'react'

export default inject('todo')(observer(props=>{
  // 方法在原型链上，属性可以,所以方法不可以直接解构
  let {todo} = props
  let {addMsg,list,taskValue} = props.todo
  // 修改任务名
  const change =(e)=>{
      let val = e.target.value
      todo.changeMsg(val); 
  }
  // 添加任务
  const add = (e) => {
    if(e.keyCode===13){
      let val = e.target.value
      let id = Date.now()
      todo.updatelist(val,'add',id)
      // 清空列表
      todo.changeMsg('');
    }
  }
  
  const renderList=()=>{
    return(
       list.map(ele=>(
         <div key={ele.id}>
             <span>{ele.id}</span>
            <input 
            type='text'
            value={ele.value} 
            onChange={(e)=>{todo.updatelist(e.target.value,'modify',ele.id)}}
            />
            <span 
             onClick={()=>{todo.updatelist('','del',ele.id)}}
             style={{color:'red'}}>删除</span>
         </div>
       ))
    )
  }
  return(
    <div>
      <h2>ToDoList</h2>
      <input
      type='text'
      // 用状态管理做受控表单
       value={addMsg}
      //  onChange里面没有e.keyCode
       onChange ={(e)=>{change(e)}}
       onKeyUp={(e)=>{add(e)}}
       />
       <br/>
       <hr/>
       <div>{renderList()}</div>
       <br/><hr/>
       <div onClick={()=>{
         todo.updatelist('','clear')
       }}>@clear</div>
    </div>
  )
}))