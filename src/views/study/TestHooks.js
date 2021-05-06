import React,{useState,useEffect} from 'react'
// 函数式组件 vs. 类组件特点对比、优势和劣势
// 概念：函数式组件（无状态组件、纯组件、PureComponent）

// React组件（React类） vs. React元素（JSX元素）

// useState
// 作用：用于定义声明式变量，模拟类组件中的state
// 语法：const [msg, setMsg] = useState('')
// useState在定义声明式变量时，一定要赋初始值
// useState定义的声明变量，要使用 set*系列方法去更新，不建议直接修改

// useEffect
// 如何理解副作用？你可以这么理解，只要不是生成JSX的业务代码，都可以认为是副作用。
// 副作用包括定时器、调接口、长连接、DOM操作、第三库的初始化等。
// 作用：模拟类组件中生命周期的特性
// 语法：useEffect(()=>{return ()=>{}}, [])
// useEffect 可以看做是 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。


const Hook=props =>{
   
  const [show,setShow] = useState(true);
  const [count,setCount] = useState(0);//不给参数，默认undefined
  let timer= null
  useEffect(()=>{
      //componentDidMount
      console.log(11);
      setCount(count+1)  //[]里面的count经过useEffect改变，不管经过任何方式，他都不会再发生变化
      return undefined
       //componentDidWillUnmount
    
   } ,[]) // componentDidUpdate
    return(
      <div>
        <br/>
        <hr/>
        {show&&<h2>测试Hook</h2>}
        <button onClick={()=>{setShow(!show)}}>显示/影藏</button>
        <br/>
        <hr/>
        <h1 >{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>添加</button>
        <button onClick={()=>{setCount(count-1)}}>减少</button>
      </div>
    )
}
export default Hook