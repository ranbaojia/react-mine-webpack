import React from 'react'

//无状态组件传到父组件也可以使用
const FormCtx = props=>{
  let {data,onChange} = props;
  const changeRgb = (e,type)=>{
    //不能修改props的值，所以深复制一下
    const newData = JSON.parse(JSON.stringify(data))
    newData[type] = e.target.value
    // 向父组件传递数据
    onChange&&onChange(newData)
  }
  return(
    <div>
      <span>字体色：</span>
      <input
      type='color'
      value={data.color||''}
      onChange={(e)=>{changeRgb(e,'color')}}
      />
      <span>背景色:</span>
      <input
      type = 'color'
       value={data.background||''}
       onChange={(e)=>{changeRgb(e,'background')}}
      />
    </div>
  )
}

export default FormCtx