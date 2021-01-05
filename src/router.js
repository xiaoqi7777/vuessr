import Vue from 'vue';
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
Vue.use(VueRouter);
Vue.use(VueMeta);// 会在当前的实例上添加一个 this.$meta
import Bar from './components/Bar.vue'
export default()=>{
  let router = new VueRouter({
    mode:'history',
    routes:[
      {
        path:'/',
        component:Bar
      },
      {
        path:'/bar',
        component:Bar
      },
      {
        path:'/foo',
        component:()=>import('./components/Foo.vue')
      }
    ]
  })

  
  return router
}