<template>
<div id="example-1">
    <button v-on:click="show = !show">
        Toggle=>{{$store.state.username}}
      </button>
     <button @click="btn">点击</button>
</div>
</template>

<script>
  export default {
      asyncData({store}){ // 异步数据 这个方法只在服务端执行,客户端会执行
      console.log('asyncData1')
      return store.dispatch('setUsername')
    },
    mounted(){
      this.$store.dispatch('setUsername')
    },
    data(){
      return{
        show: true,
      }
    },
    methods:{
      btn(){
        console.log(123)
      }
    }
  }
</script>

<style scoped>
</style>