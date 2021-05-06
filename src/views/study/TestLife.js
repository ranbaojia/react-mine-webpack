import React from 'react'


export default class extends React.Component{
  // constructor()
  // 当React组件实例化时，是第一个运行的生命周期
  // 在这个生命周期中，不能使用this.setState()
  // 在这个生命周期中，不能使用副作用(调接口，dom操作、定时器、长连接)
  // 不能把props和state交叉赋值
  constructor(props){
      super(props)
      // super(props)必须是第一行代码，表示调用父类的构造器
      this.state ={
        count: 1,
        num: 1
      }
      console.log('----------constructor----------')
  }
  //componentDidMount()
  // 他表示DOM结构在浏览器中渲染已完成
  // 在这里，可以使用任何的副作用(调接口、定时器、DOM操作、长连接。。。)
  // 在这里可以使用this.setState()
  componentDidMount(){
    console.log('----------componentDidMount----------')
  }
  //componentDidMount()
  // 相当于是vue中的updated()
  // 他表示DOM结构在浏览器中渲染更新已完成，只发生在更新阶段
  // 在这里，可以执行大多数的副作用，但是不建议
  // 在这里，可以使用this.setState(),但是需要终止条件判断
  componentDidUpdate(){
    console.log('----------componentDidUpdate----------')
    if(this.state.count<10){
      this.setState(state=>({count:this.count}))
    }
  }
  // shouldComponentUpdate()
  // 它相当于是一个开关，如果它返回true则更新机制正常执行，如果返回false则更新机制停止
  // 在vue中没有，所以在React面试中经常问到
  // 存在的意义可以实现性能优化。但是基本用不到
  // 最新的react解决方案是使用PureComponent
  // 理论上，这个生命周期的作用，用于精细地控制声明式变量的更新问题，如被别变化的声明式变量参与了视图渲染规则
  // 返回true，如果被变化的声明式变量没有直接或间接参与视图渲染则返回false，以减少diff运算。
  shouldComponentUpdate(nextProps,nextState){
    let {count} = this.state
    console.log('----------shouldComponentUpdate----------')
    if(nextState.count !==count){
      return true
    }
    //返回false，不再执行diff运算
    return false
  }

  // componentWillUnmmount()
  // 相当于vue中的beforeDestory()
  // 在这里一定不可以使用this.setState()
  componentWillUnmount(){
    console.log('----------componentWillUnmount----------')
  }
  // render()
  // 是class组件唯一的一个必须要有的生命周期
  // 这个render函数必须要有return,return结果只需满足jsx语法都可以
  // 他的return返回的jsx默认只能是单一根节点，但是在Fragment的语法支持下可以返回多个兄弟节点
  // 碎片语法 React支持对象调用的组件 <React.Fragment></React.Fragment>
  // 在return之前，可以做任意的业务逻辑(但不能使用this.setState())
  // 每当setState修改声明式，会触发diff运算，进而触发render重新调用
  // render()这个生命周期，在装载阶段和更新阶段都会运行。
  render(){
    console.log('----------render----------')
    let {count} = this.state
    return (
      // 碎片语法 React支持对象调用的组件 <React.Fragment></React.Fragment>
      // 也可以写为<></>
    // 碎片写法一
    // <React.Fragment>
    //       <div>
    //         <h1>测试生命周期</h1>
    //       </div>
    //       <div>
    //         <h1>测试生命周期</h1>
    //       </div>
    // </React.Fragment>
    //碎片写法二
    <>
      <div>
        <h1>测试生命周期</h1>
      </div>
      <div>
        <h1>测试生命周期</h1>
      </div>
      <h1>{count}</h1>
      <button onClick={this.setState(state=>({count:state.count+1}))}>按钮</button>
      <button onClick={this.setState(state=>({num:state.num+1}))}>按钮</button>
    </>
    )
  }
}