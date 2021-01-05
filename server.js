// // let express = require('express')
// // let fs = require('fs')
// // let app = express();

// // let Vue=  require('vue');
// // // vue提供的服务端渲染的包
// // let VueServerRenderer = require('vue-server-renderer')
// // let vm = new Vue({
// //   template:'<div>heelo w11orld</div>'
// // })
// // // 创建渲染函数
// // let render = VueServerRenderer.createRenderer()
// // app.get('/',(req,res)=>{
// //   render.renderToString(vm,function(err,html){
// //       res.send(html)
// //   })
// // })
// // app.listen(3000)

// let express = require('express')
// let fs = require('fs')
// let app = express();
// let Vue=  require('vue');
// // vue提供的服务端渲染的包
// let VueServerRenderer = require('vue-server-renderer')
// let vm = new Vue({
//   template:'<div>heelo w1111111111111orld</div>'
// })
// let template = fs.readFileSync('./index.html','utf8')
// // 创建渲染函数
// let render = VueServerRenderer.createRenderer({
//   template
// })
// app.get('/',(req,res)=>{
//   const context = {
//     title:'xxxxx',
//     meta:`
//       <meta name="keyword" content="vue,ssr">
//       <meta name="description" content="vue srr demo">
//     `,
//   }
//   render.renderToString(vm,context,function(err,html){
//       res.send(html)
//   })
// })
// app.listen(3000)

// let arr = [6338632679821312]
// console.log(arr.includes(`6338632679821312`))
const i = 1;
const j = 1;
function fn() {
  console.log(123);
}

if (true || fn()) {
  console.log('----');
}
