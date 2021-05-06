import {action, makeObservable, observable} from 'mobx'
import fetchQqMusic from '@/utils/api'
 class Music{
  constructor(){
    makeObservable(this,{
      list:observable,
      updateList:action
    })
  }
  list = []
  updateList(paload){
    // 调用接口
    fetchQqMusic(paload).then(res=>{
      this.list = res.song.list
    })
  }
}
export default Music