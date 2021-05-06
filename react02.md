### 生命周期
jsx重新生成，render重新调用
componentDidMount(){
  setInterval(()=>{
    this.setState((state)=>({count;++state.count}))
  })
}
+ hooks React 16.8新增
### 如何进一步理解props？
+ 1、在react开发中，props的作用远远比state更强大
+ 2、类组件和函数组件，都默认有props
+ 2、props是父子组件通信的纽带
+ 4、props不能修改，因为React函数组件使用纯函数
+ 5、props可以传递任何数据类型，还可以传递事件函数和JSX元素
+ 6、props和state不能交叉赋值,他们没有任何关联
+ 7、最新的react中props验证毕传非必传是一个第三方库prop-types来实现的

### 如何进一步state
+ 1、state是声明式变量，它被this.setState()修饰时，会生成一个新的虚拟DOM，并触发diff运算，最终更新DOM视图。使用其他方式不会触发diff运算,所以也不会更新DOM
如add(){this.state.count++},
+ 2、state在定义时发生在构造器中，但是在构造器中不能使用this.setState()
+ 3、要想改变视图，一定要使用this.setState()
+ 4、重要原则：当我们修改state时，要考虑新值是否由旧值计算而来，如果是建议使用this.setSate(fn),如果不是，可以使用this.setState({count:2})，修改值时使用事件对象且用数组表达式修改this.setState({[e.target.name]:e.target.value})
+ 5、this.setState()方法是异步的，微任务，但是在定时器内部使用this.setState()是他是同步的
+ 6、this.setState({}|fn,fn),当setState()这个异步操作完成时，第二个回调函数能拿到最新的state中的数据
+ 7、多个this.setState()同时，diff/render只触发一次
```js
this.setState({adName:''})
this.setState({adUrl:''})
// 相当于
this.setState({
  adName:'',
  adUrl: ''
})
```
+ 8、state是当前组件实例的私有数据，这些state数据可以向子元素传递，不能反向传递，这就称为单向数据流


### 类组件事件绑定
+ 1、所有事件属性名，都要求是小驼峰命名法，并且要以on开头，格式参考:onMyEvent={}
+ 2、键盘事件:onKeyUp={}.鼠标事件:onMouseEnter={}
+ 3、推荐使用bind改变this指向
+ 4、如果采用Es6的事件绑定，则不用考虑this指向问题，建议使用ES6方法
+ 5、事件对象，ES5事件绑定的处理函数事件对象可直接由原型事件处理函数传入，事件处理函数的最后一个参数是事件对象
+ 6、箭头函数要在(e)=>handel(e)传入，手动传递事件对象
+ 7、阻止默认事件,无论ES5还是ES6，要想阻止默认事件`e.preventDefault()`阻止冒泡`e.stopPropagation()`
```js
handle(e){
  // 阻止默认事件
  e.preventDefault()
  // 阻止冒泡
  e.stopPropagation()
}
```
+ 8、如果想监听特殊(enter,滚轮)事件，都要通过事件对象处理

+ 9、事件处理函数的自定义传参，特别注意es6和es5事件对象的位置即可
+ 10、自定义事件，也要遵从onMyEvent小驼峰命名方式

### 纯组件/无状态事件绑定
```js
export default ()=>(
  return (
    <div></div>
  )
)
```
如果相传自定义参数，必须手动传事件对象，不然为undefined
### 列表
+ 1、 列表循环，支持数组渲染(数组中的元素基本数据类型，JSX元素)
+ 2、当被渲染的列表需要进行数据处理时常建议封装自定义render方法来渲染列表
+ 3、列表渲染数组一定要加key(JSX支持数组渲染，一定要加key，key要加在数组中的JSX元素)
+ 4、列表渲染，React官方建议使用map循环,不强制

### 疑问
1、为啥非得加括号
```js
  handle(){
    this.setState(state=>{ count:state.count+1},()=>{
       console.log('count',this.state.count)
    })
    console.log('点击')
  }
  
  handle(){
    this.setState(state=>({ count:state.count+1}),()=>{
       console.log('count',this.state.count)
    })
    console.log('点击')
  }
```
2、onChange的意义
3、e