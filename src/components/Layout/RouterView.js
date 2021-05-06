import React from 'react'
import {Route,Switch, Redirect,HashRouter} from 'react-router-dom'
import routes from '@/views'

const ViewRouter = ()=>{
  const res = [];
   const reaction=(arr)=>{
     arr.map(ele=>{
      res.push(
        <Route
        key={ele.id}
        path = {ele.path}
        exact
        component={ele.component}
        />
      )
     })
    
   }
   routes.map(ele=>{
     ele.children&&reaction(ele.children)
   })
   return res
  }
export default ()=>{
  return(
  <div  className='jc-Context'>
      <HashRouter>
        <Switch>
          {ViewRouter()}
          {/* 重定向要写在后面 */}
          <Redirect  to='/jsx'/>
        </Switch>
      </HashRouter>
  </div>
   
  )
}
