import ToDo from './modules/todo2'
import Music from './modules/music'
class Store {
  constructor(){
    this.todo=new ToDo()
    this.music = new Music()
  }
}
export default new Store()