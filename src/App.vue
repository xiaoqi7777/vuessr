<template>
    <div id='app'>
      123123
      <router-link to="/bar">
      ba11r</router-link>
      <router-link to="/foo">foo</router-link>
    <br>
    <router-view></router-view>
    </div>  
</template>

<script>
import Bar from './components/Bar.vue'
import Foo from './components/Foo.vue'
export default {
  metaInfo:{
    title:'xxxxxxxx'
  },
  components:{
    Bar,Foo
  }
}
</script>