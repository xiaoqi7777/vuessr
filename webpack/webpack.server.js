let path = require('path')
let htmlPluginWebpack = require('html-webpack-plugin')
// const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
let {
  smart
} = require('webpack-merge')
let base = require('./webpack.config')

module.exports = smart(base, {
  target:'node',//打包除的结果给node用
  mode: "development",
  entry:{
    server:path.join(__dirname,'../src/entry-server.js')
  },
  output:{
    libraryTarget:'commonjs2'
  },
  plugins:[
    new htmlPluginWebpack({
      template: path.join(__dirname, '../server.html'),
      filename: 'server.html',
      // excludeChunks: ['server']
    }),
    // new VueSSRServerPlugin()
  ]
})