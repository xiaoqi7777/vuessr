
import Vue from 'vue';
import App from './App.vue'
import createRouter from './router'
import createStore from './store'
// 为了兼容服务端 要把这个方法改造成函数
export default ()=>{
  let router = createRouter()
  let store = createStore()
  let vm = new Vue (  {
    // el:"#app",//手动挂载
    render:(h)=>h(App),
    router,
    store
  })
  return {
    vm,
    router,
    store
  }
}
