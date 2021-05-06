### 表单绑定
1、受控表单：指的是表单的value/checkedd属性由state控制
```js
value={state.msg}
```
2、非受控表单：指的是表单的value/checked属性不由state控制
```js
state可能不是父组件的state，value可能父组件通过props传给表单的state
```js
所以也可以由状态管理的observable做受控表单
```
```js
受控表单的四种实现方式，当前组件this.state受控，父组件传过来的props进行受控，mobx数据管理受控，useState纯组件受控
```
原则：在React开发中尽可能得使用受控表单，但有一个例外<input type='file'>
