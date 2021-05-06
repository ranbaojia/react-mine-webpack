// 凡是用到jsx的地方都要引入react
import React from 'react'
// 引入路由
import Layout from  '@/components/Layout/Layout'
// 引入路由展示
import RouterView from '@/components/Layout/RouterView'
import {HashRouter} from 'react-router-dom'
import 'antd/dist/antd.css';
// 引入头部
import Header from '@/components/header'
// mobx集成
import store from '@/store'
import {Provider} from 'mobx-react' //基于高阶组件上下文的状态管理
// import UserDetail from './views/router/UserDetail';
// mobx 使用Provider的话你要用还要使用其他api
class App extends React.Component {
  render(){
    // <>包起来称为react组件实例化
    return( 
      <div>
        <Provider {...store}>
          <div className='jc-right'>
            <Header/>
            <div>
              <RouterView>
              </RouterView>
            </div>
            {/* <UserDetail/> */}
          </div>
          <div className='jc-left'>
            <Layout/>
          </div>
        </Provider>
      </div>
    )
  }
}
export default App
