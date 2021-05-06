import {makeObservable,action,computed,observable} from 'mobx'

class ToDo{
  constructor(){
    makeObservable(this,{
      addMsg: observable,
      list:observable,
      taskValue:observable,
      changeMsg:action,
      updatelist:action
    })
  }
  addMsg='';
  taskValue='';
  list = [];
  changeMsg(m){
    this.addMsg=m
  }

  updatelist(value,t,id=''){
    let task ={id,value}
   switch(t){
      //增加
      case 'add':
       this.list.push(task);
      break;
      //删除
      case 'del':
       this.list=this.list.filter(ele=>{
         return ele.id !== id
       })
      break;
      //修改
      case 'modify':
        this.list.forEach(ele=>{
          if(ele.id===id){
            ele.value=value
          }
        });
      break;
      case 'clear':
        this.list=[]
      break;
      default:
        break;
   }
  
  }
}
export default ToDo