import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

export default()=>{
  let store = new Vuex.Store({
    state:{
      username:'sg'
    },
    mutations:{
      setUsername(state){
            console.log('mutations')
            state.username = 'xxxx'
      }
    },
    actions:{
      setUsername({commit}){
        return new Promise((resolve,reject)=>{
          setTimeout(()=>{
            console.log('actions')
            commit('setUsername')
            resolve()
          },2000)
        })
      }
    }
  })
  if(typeof window !== 'undefined' && window.__INITIAL_STATE__){
    store.replaceState(window.__INITIAL_STATE__);
  }
  return store
}