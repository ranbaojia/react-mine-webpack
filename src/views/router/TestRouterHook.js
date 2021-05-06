import React,{useState} from 'react'
// 引入路由history
import {useHistory,useLocation,withRouter} from 'react-router-dom'
const Child =props =>{
  // 子组件拿到history
  const history = useHistory()
  const location = useLocation()
  console.log('子组件props',props)
  console.log(history,location)
  // history action: "POP"
  // block: ƒ block(prompt)
  // createHref: ƒ createHref(location)
  // go: ƒ go(n)
  // goBack: ƒ goBack()
  // goForward: ƒ goForward()
  // location: {pathname: "/router/hook", search: "", hash: "", state: undefined}
  // push: ƒ push(path, state)
  // replace: ƒ replace(path, state)
  
  //location{pathname: "/router/hook", search: "", hash: "", state: null}
  const skipToHome = ()=>{
    //使用路由规则 
    history.push('/')
  }
  return(
    <div>
      我是子组件
      <button onClick = {skipToHome}>回到首页</button>
    </div>
  )
}
 const list = [{id:1,name:'存庆'},{id:2,name:'子轩'}]
 const userList=()=>{
   const history = useHistory();
   const pushDetail=(ele)=>{
     history.push(`/router/detail/${JSON.stringify(ele)}?date=2021`)
   }
   return(
     list.map(ele=>(
       <div 
       key={ele.id} 
       style={{cursor:'pointer'}}
       onClick = {()=>{pushDetail(ele)}}
       >
        {ele.id+'----'+ele.name}</div>
     ))
   )
 }
export default props =>{
  return(
    <div>
      <h1>测试hookRouter</h1>
      <Child/>
      <hr/>
      <br/>
      <h4>用户信息
        {userList()}
      </h4>
    </div>
  )
}



