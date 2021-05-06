import React from 'react'
// 创建react上下文实例，可传入默认参数，表示注入的默认数据
import action from '../action'

const Ctx = React.createContext()
const connect=(fn1,fn2)=>{
   return (WrapComponent)=>{
    return class extends React.Component{
      constructor(props){
        this.state={ 
        } 
      }
      changeMsg(){
        return fn2(dispatch)
      }
      render(){
        return(
          <WrapComponent {...fn1(),action}  />
        )
      }
    }
   } 
}


const ResultComponent=connect(function mapState(store){
  return {
    msg:store.msg
  }
},function mapDispatch(dispatch){
  return {
     chageMsg:v=>dispatch(chageMsg(v))
  }
})(props=>{
  let {msg} = props;

   
})
const store = {
  msg:'hello world'
}
const App = ()=>{
  return(
    <Ctx.Provider {...store}>
      <Ctx.Consumer>
        {
          data=>{
            <ResultComponent {...data}/>
          }
        }
      </Ctx.Consumer>
      
    </Ctx.Provider>
  )
}
ReactDOM.render(<App/>,getElementById('app'))
