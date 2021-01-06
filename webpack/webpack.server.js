const path = require('path');
const HtmlPluginWebpack = require('html-webpack-plugin');
// const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const {
  smart,
} = require('webpack-merge');
const base = require('./webpack.config');

module.exports = smart(base, {
  target: 'node', // 打包除的结果给node用
  mode: 'development',
  entry: {
    server: path.join(__dirname, '../src/entry-server.js'),
  },
  output: {
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new HtmlPluginWebpack({
      template: path.join(__dirname, '../server.html'),
      filename: 'server.html',
      // excludeChunks: ['server']
    }),
    // new VueSSRServerPlugin()
  ],
});
