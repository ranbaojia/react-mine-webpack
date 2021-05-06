
// 定义子store第一种写法
// import {makeAutoObservabl} from 'mobx'

// class ToDoStore{
//   constructor(){
//     makeAutoObservabl(this)
//   }
//   // 需要共享的状态组件相当于vuex的state
//   msg = 'hello mobx'
//   // 相当于vuex的mutations和actions
//   // 相当于set方法
//   changeMsg(payload){
//     this.msg = payload
//   }
//   //相当于Vuex中的getters
//   get length(){
//     return this.msg.length
//   }
// }
// 定义子store的第二钟写法 引入修饰符
// action表示把一个方法变成action，他可以直接修改observable变量
// observable他的作用是把一个变量变成可观察的,当他变化时，在观察者中可以自动更新
// computed用于get操作，是计算属性，当他所关联的observable变量发生变化时，会重新计算

import {makeObservable,action,computed,observable} from 'mobx'
export default class  ToDoStore{
  constructor(){
    makeObservable(this,{
      msg: observable,
      //给个身份 哪些东西是用来观察的，哪些东西是用来计算的，哪些东西是用来当做action用的
      changeMsg:action,
      length: computed //这玩意抛出去相当于计算属性

    })
  }
  msg = 'hello mobx2'
  changeMsg(payload){
    this.msg = payload
  }
  get length(){
    return this.msg.length
  }
  //Mobx中的业务方法，不参与
  handleString(str){
    return str.replace(/\s/img,'')
  }
}


// mobx5的写法，上述是mobx6的写法
// import {action,computed,observable} from 'mobx'    //有修饰符

// export default class ToDoStore{
//   @observable
//   msg = 'hello mobx5'
//   @action
//   changeMsg(payload){
//     this.msg = payload
//   }
//   @computed
//   get length(){
//     const s = this.handleString(this.msg)
//   }
//   handleString(){
//     return str.replace(/\s/img,'')
//   }
// }