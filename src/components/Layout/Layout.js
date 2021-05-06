import React,{useState,useEffect} from 'react'
import {Route,Switch,NavLink, Redirect, HashRouter} from 'react-router-dom'
import { Menu, Button } from 'antd';
import routes from '@/views'
const { SubMenu } = Menu;
console.log(SubMenu)
export default ()=>{ 
  const [collapsed,setCollapsed] = useState(false)

  const ViewLink = () =>{
    return routes.map(ele=>{
      if(!ele.hidden){ return(
          <SubMenu  
           title={ele.text}
           key={ele.id}
           className='subMenu'
           >
            {ele.children.map(item=>(
              <Menu.Item 
              key={item.id}
              className='menuItem'
             >
                <NavLink
                to={item.path}
                >{item.text}
                </NavLink>
              </Menu.Item>
            ))}
          </SubMenu> 
        )
        }
      }
    )
  }

  return (
    <div 
      className='jc-layout'
    > 
      <Button type="primary" onClick={()=>{setCollapsed(!collapsed)}} style={{ marginBottom: 16 }}>
          {/* {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)} */}
      </Button>
      
      <HashRouter>
          <Menu
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
            >
            {ViewLink()}
          </Menu>
        
       
      </HashRouter>
    </div>
  )
}