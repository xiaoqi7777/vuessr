let path = require('path')
let VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [{
        test: /\js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      }, 
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve: {
    alias: { // 不加这个会 编译报错
      'vue': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}