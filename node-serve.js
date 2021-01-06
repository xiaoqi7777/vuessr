const express = require('express');
const fs = require('fs');

const app = express();
const path = require('path');

const serverBundle = fs.readFileSync('./dist/server.js', 'utf8');
// vue提供的服务端渲染的包
const VueServerRenderer = require('vue-server-renderer');

const template = fs.readFileSync('./dist/server.html', 'utf8');
// const clientManifest = require('./dist/vue-ssr-client-manifest.json')
// const serverBundle = require('./dist/vue-ssr-server-bundle.json')
// // 创建渲染函数
const render = VueServerRenderer.createBundleRenderer(serverBundle, {
  template,
});

app.get('/', async (req, res) => {
  // 把渲染好的字符串丢给客户端,返回的只是字符串,没有vue实例功能
  // 第一个参数 对应了server.js入口文件 函数接收的参数
  const context = { url: req.url };
  render.renderToString(context, (err, html) => {
    res.send(html);
  });
  // let html =  await  render.renderToString(context)
  // res.send(html)
});
app.use(express.static(path.join((__dirname, 'dist'))));

// 如果访问的路径不存在 默认渲染到index.ssr.html 并且把路由定向到请求的路径
app.get('*', (req, res) => {
  // 把渲染好的字符串丢给客户端,返回的只是字符串,没有vue实例功能
  // 第一个参数 对应了server.js入口文件 函数接收的参数
  const context = { url: req.url };
  render.renderToString(context, (err, html) => {
    res.send(html);
  });
});
app.listen(3000);
