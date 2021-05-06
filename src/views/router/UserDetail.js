import React from 'react'
import {useParams,useLocation} from 'react-router-dom'
import {Button} from 'antd'

export default ()=>{
  // 路由传参useParams
  const p = useParams();
  const l = useLocation();
  console.log('location',l);
    // 固有属性，p.id就是路由传参过来的东西
  console.log('location',JSON.parse(p.id));

  return(
    <div>
      <h1>用户详情页</h1>
      <hr/>
      <br/>
      <h4>{`我是${JSON.parse(p.id).id}号用户`}</h4><span style={{color:'#f20',fontSize:'20px'}}>{JSON.parse(p.id).name}</span>
    </div>
  )
}