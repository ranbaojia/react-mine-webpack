### 组合vs继承
```
组合和继承，都是组件复用的一种思想,但是react官方推荐使用组件来实现组件复用
如果再jsx的组件中间写了任意的东西，可以在子组件通过默认的{child}来展现
```
什么时候用属性传递，什么时候用child传递

组合的语法基础:使用props.children、自定义属性可以传递React元素(render props)
<NavBar render=()=>(<div></div>)/>

事件处理函数常用处理方法，给个默认调用
onClick={()=>onClose&&onClose()}
```js
// 组件复用之继承
class QfModel extends React.Component {}//基类
class QfDeleteModal extends QfModal {}//删除类型Modal
class QfConfirmModal extends QfModal {}
```


