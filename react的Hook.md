### hook
意义：他可以让你不在编写class的情况下使用state以及其他功能

useState语法 
作用：用于定义声明式变量，模拟类组件中的state
const [count,setCount] = useState(0)//声明式变量变化视图发生自动更新
count [msg,setMsg] = useState('') //''是初始值，如果不给就是undefined的意思
const [show,setShow] = useState(true)  //第二个参数setShow甚至可以写为xxx


useState定义的声明式变量，要使用set*系列方法去更新，不建议直接修改
useEffect
作用：模拟类组件生命周期的特性
如何理解副作用?你可以这么理解，只要不是生成jsx的业务，都可以认为是副作用，副作用包括定时器，调接口，长连接，DOM操作，第三方库的初始化等
语法：useEffect(()=>{return ()=>{}},[])
第二个参数空数组表示useEffect无论发生什么副作用，我这个useEffect方法都只执行一次
```js
  let timer= null
  useEffect(()=>{
      timer=setInterval(()=>{
        // componentDidMount
        setCount(count+1)  //[]里面的count经过useEffect改变，不管经过任何方式，他都不会再发生变化
      },1000)
      return ()=>{
        clearInterval(timer)//componentDidWillUnmount
      }
    },[]) // componentDidUpdate
```

### useEffect的Hooks总结

> 一、useEffect第一种用法，使用[]当参数，则执行一次did,后续不管怎么操作都不在执行
```js
  useEffect(
    ()=>{
    console.log('did')
  },return()=>{
     console.log('will')
  },[])
```
> 二、useEffect第二种用法，不使用参数，则不管什么情况每次都会执行，但是第一次执行性did，而不会执行will，所以第一次不需要执行的动作可以放在return里面
```js
  useEffect(
    ()=>{
    console.log('did')
  },return()=>{
     console.log('will')
  })
```
> 三、如果后面参数是变化的声明式变量，则，第一次会执行did，后续需要flag声明式变量变化他才会变化，变化的过程是will，did
```js
  useEffect(
    ()=>{
    console.log('did')
  },return()=>{
     console.log('will')
  },[flag])
```
> 四、特别强调：要想让第二种副作用里的return发生变化，则return之前至少要有一句副作用的代码才会发生变化

```js
useEffect语法
useEffect(()=>{
  //componentDidMount阶段
  setInterval(()=>{
    setNum(num+10)
  }) 
  return ()=>{
  // componentWillUnmount阶段
  }
  },
  [count,msg] //componentDidUpdate阶段
) // 每次count和msg发生变化，我就执行
```
两种副作用，一种是需要清除的，一种是不需要清除的

### 疑问，为啥用hook组件里的按钮点击增加数据，会被useEffect强行恢复

