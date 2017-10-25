const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

// const extractSass = new ExtractTextPlugin('css/[name].[chunkhash].css');
const extractSass = new ExtractTextPlugin('css/[name].css');

module.exports = {
  entry: {
    common: './asset/webpack/index.js',
    auth: './asset/webpack/auth.js',
    // vendor: ['jquery'],
  },
  output: {
    // filename: 'js/[name].[chunkhash].js',
    filename: 'js/[name].js',
    path: path.resolve(__dirname, './public/'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      }, {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: 'css-loader',
            options: { minimize: true },
          }, 'sass-loader'],
        }),
      }, {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  externals: {
    jquery: true,
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      // 删除所有的注释
      compress: {
        // 在UglifyJs删除没有用到的代码时不输出警告
        warnings: false,
        // 删除所有的 `console` 语句
        drop_console: true,
        // 内嵌定义了但是只用到一次的变量
        collapse_vars: true,
        // 提取出出现多次但是没有定义成变量去引用的静态值
        reduce_vars: true,
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({ names: ['common'] }),
    new ManifestPlugin({
      fileName: 'my-manifest.json',
      publicPath: '/',
    }),
    extractSass,
  ],
};
