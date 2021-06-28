/**
   * npm i vue -S
   * 在使用的文件中导入vue import Vue from 'vue'
   * 然后在html文件中挂载vue实例
      const app = new Vue({
        el: '#app',
        data: {
          message: 'hello vue'
        }
      })
   * 接下来设置别名，指定这个文件vue.esm.js，
   * runtime-only ->代码中不可以有任何template
   * runtime-compiler -> 代码中可以有template，因为有compiler可以用于编译template
   */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'), //生成打包文件位置
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        /**
         * css-loader只负责将css文件进行加载 
         * style-loader负责将样式添加到DOM中
         *  使用多个loader时，从右向左，从下往上
         */
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片小于limit时，会将图片编译成base64字符串形式
              limit: 8 * 1024,
              name: 'img/[name].[hash:10].[ext]',
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: { // 预设：指示babel做怎么样的兼容性处理
              "presets": [
                [
                  "@babel/preset-env",
                  {
                    "debug": true,  //在cmd窗口打印对应引用信息
                    "useBuiltIns": "usage",  // 这里配置usage 会自动根据你使用的方法以及你配置的浏览器支持版本引入对应的方法。
                    "corejs": 3  // 指定 corejs 版本
                  }
                ]
              ]
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  plugins: [
    // 在vue-loader@15.x 版本，这个插件必须要配置，配合vue-loader使用
    new VueLoaderPlugin(),
    // 版权插件
    new webpack.BannerPlugin('最终版权归aaa所有'),
    
    new HtmlWebpackPlugin({
      template: './src/index.html', // 在dist文件夹中创建HTML文件
      scriptLoading: 'blocking',//去除script defer模式
      //html压缩
      mimify: {
        //移除空格
        collaspeWhitespace: true,
        //移除注释
        removeComments: true
      }
    })
  ],
  resolve: {
    // alias 别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    // 简写扩展名
    extensions: ['.js', '.css', '.vue']
  },
  //生产环境下回自动压缩js代码
  // mode: 'development',
  devtool: 'source-map'
}