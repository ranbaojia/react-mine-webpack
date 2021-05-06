### React的生命周期 3-2-1
+ 第一阶段：装载阶段（3） constructor/render/componentDidMount
+ 第二阶段：更新阶段（2） [shouldComponentUpdate/render/componentDidUpdate]
+ 第三阶段：卸载阶段（1）componentWillUnmount
### 只有用setState才能出发diff运算，render函数重新执行，return重新执行，但是这一堆虚拟dom只有发生变化的节点才更新到虚拟dom中
constructor - render - componentDidMount-componentDidUpdate

疑问《
 shouldComponentUpdate 怎么做性能优化的
