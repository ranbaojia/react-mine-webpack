### react-router
路由规则怎么定义，用了三个对象，

代码分割相当于vue-router中的路由懒加载,其实webpack代码分割的方式有很多种，只不过最经典的代码分割方式就是用路由实现的
>作用：提升应用程序的运行速度，本质上是一种性能优化
>核心技术：动态import组件，webpack代码分割功能
react中使用react.lazy实现路由异步加载
异步导入 const TestJsx=loadable(()=>import('./'))这个环境目前babel不支持
要安装code split的插件去支持
代码分割的原理，被懒加载的东西如果没有被访问，都不会被加载，这是路由懒加载的原理


路由规则中加入hidden：true，可隐藏nav-link的显示
#### Switch的作用，包起来让找路由规则更快
类似switch case语句
Switch一定要用，Route的外面只能是Switch
不能有其他层元素
#### with-router，向下兼容的，所有路由信息不起作用就用with-router
1、在react路由系统中，并不是所有的组件中都能拿到路由信息和路由API
2、只有被Route包裹过(也就是定义在路由匹配规则上)的组件中，才能通过props拿到路由信息和路由API
3、对那么没有被Route包裹的组件，怎么拿到路由信息，使用WithRouter这个高阶组件函数
4、使用withRouter这个高阶组件帮助那些没有路由api的组件拿到路由APi
那路由信息
const h = useHistory()
h.push('/user/detail/id:')
#### 路由传参
用useParams专门拿路由的动态参数

const p = useParams();
const l = useLocation();
<h1>{p.id}</h1>

#### location不常用

##### 疑问：vue的路由懒加载怎么实现的
首页需要加载的才加载,也就是平常所说的运行时动态加载
react实现代码分割的最好方式就是动态路由
两个包
你要确保 Babel 能够解析动态 import 语法而不是将其进行转换。对于这一要求你需要 babel-plugin-syntax-dynamic-import 插件。
如果你想要在使用服务端渲染的应用中使用，我们推荐 @Loadable Components 这个库




### 路由使用过程
一：路由匹配规则的建立，根据所要展示的页面建立路由匹配规则，需要使用商品详情的和用户详情的需要匹配路由传参/xxx/xxx/:id
二：路由点击跳转的layout块，放在侧边栏，供用户点击，尤其注意有些模块不需要展示在路由的navlink里，例如用户详情，路由的navlink根据路由匹配规则进行渲染，不需要点击的选项可设置属性hidden:true,或者如果只做二级菜单，那么只需要把不要navlink的选项放在三级children里面
三：路由展示块也要根据路由规则匹配渲染，NavLink和Route都要包在Router里面才能正常使用。
四：其中用户详情的点击跳转按钮可放在某一个页面内，供跳转到用户详情使用，用户详情页使用useParams().id拿到路由传参的值


