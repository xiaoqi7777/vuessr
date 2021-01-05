// webpack/webpack.client.js
let htmlPluginWebpack = require('html-webpack-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
let path = require('path')
let {
  smart
} = require('webpack-merge')
let base = require('./webpack.config')

module.exports = smart(base, {
  entry: {
    client: path.join(__dirname, '../src/entry-client.js')
  },
  mode: "development",
  plugins:[
    new htmlPluginWebpack({
      template: path.join(__dirname, '../client.html'),
      filename: 'index.html'
    }),
    new VueSSRClientPlugin()
  ]
})