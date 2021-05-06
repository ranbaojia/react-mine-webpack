// webpack代码分割,通过路由异步加载实现loadable(()=>import('./study/TestJsx'))
import loadable from '@loadable/component'
const TestJsx = loadable(()=>import('./study/TestJsx'))
const TestContext = loadable(()=>import('./study/TestContext'))
const TestCombine = loadable(()=>import('./study/TestCombine'))
const TestEvent = loadable(()=>import('./study/TestEvent'))
const TestRouterHook = loadable(()=>import('./router/TestRouterHook'))
const UserDetail = loadable(()=>import('./router/UserDetail'))
const Music = loadable(()=>import('./mobx/Music'))
const ToDo = loadable(()=>import('./mobx/ToDoList'))
// 路由的标准写法
export default[
  {
    id:1,
    text:'学习展示页',
    children:[
      {id:10,text:'学习Jsx',path:'/study/jsx',component:TestJsx},
      {id:11,text:'学习Context',path:'/study/ctx',component:TestContext},
      {id:12,text:'学习Combine',path:'/study/combine',component:TestCombine},
      {id:13,text:'学习Event',path:'/study/eve',component:TestEvent}
    ]
  },
  {
    id:2,
    text:'路由展示页',
    children:[
      {id:20,text:'路由Hook',path:'/router/hook',component:TestRouterHook},
    ]
  },
  {
    id:3,
    text:'用户详情',
    hidden:true,
    children:[
      {id:30,text:'用户详情',path:'/router/detail/:id',component:UserDetail,}
    ]
  },
  {
    id:3,
    text:'mobx展示页',
    path:'/ctx',
    children:[
      {id:31,text:'状态ToDo',path:'/mobx/todo',component:ToDo},
      {id:32,text:'状态Music',path:'/mobx/music',component:Music}
    ]
  }
]

