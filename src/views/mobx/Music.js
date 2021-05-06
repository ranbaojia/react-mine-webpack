import React,{useEffect,useState} from 'react'
import {inject,observer} from 'mobx-react'


let str = 'ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=66395736276513274&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E5%BC%A0%E6%9D%B0&g_tk_new_20200303=5381&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'

const params = {}
str.split('&').map(ele=>{
  const arr = ele.split('=')
  params[arr[0]] = arr[1]
})

export default inject('music')(observer(props=>{
  let {music}  = props
  const [page,setPage] = useState(1)
  const [text,setText] = useState('张杰')
  const [load,setLoad] = useState(0)

  useEffect(
   ()=>{
     if(page<=1) setPage(1)
    //  设置入参
     params.w = text
     params.p = page
    // 调接口
    music.updateList(params)
    return undefined
   },[page,load]
  )
  const renderList=()=>{
    return music.list.map(ele=>(
      <div key={ele.id}>
          <span>{ele.id}</span>
          ----
          <span>{ele.title}</span>
      </div>
    ))
  }
  const serchConfirm=e=>{
    if(e.keyCode ===13){
      setLoad(load+1)
    }
  }
  return(
    <div>
       <h1>音乐列表</h1>
       <input
        type='text'
        value={text}
        onChange={e=>setText(e.target.value)}
        onKeyUp = {serchConfirm}/>
        {renderList()}
        <button onClick={()=>setPage(page-1)}>上一页</button>
        <button onClick={()=>setPage(page+1)}>下一页</button>
    </div>
  )
}))