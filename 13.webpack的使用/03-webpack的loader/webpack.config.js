const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
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
      }
    ]
  },
  mode: 'development'
}