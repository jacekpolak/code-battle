const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputPath = path.resolve(__dirname, './dist');
const srcPath = path.resolve(__dirname, './src');

module.exports = {
    entry: [
      'eventsource-polyfill', // necessary for hot reloading with IE
      './src/index'
    ],
    output: {
      path: outputPath, // Note: Physical files are only output by the production build task `npm run build`.
      publicPath: '/',
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        // {
        //   enforce: 'pre',
        //   test: /\.jsx?$/,
        //   include: srcPath,
        //   loader: 'eslint-loader',
        //   options: {
        //     fix: true
        //   }
        // },
        {
          test: /\.jsx?$/,
          include: srcPath,
          use: 'babel-loader'
        },
        {
          test: /\.s?css$/,
          include: srcPath,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(png|jpe?g)$/,
          exclude: /node_modules/,
          use: [
              'preload-image-loader',
              'file-loader?[path][name].[ext]'
          ]
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          use: 'file-loader'
        },
        {
          test: /\.(woff|woff2)$/,
          use:'url-loader?prefix=font/&limit=50000'
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          use: 'url-loader?limit=10000&mimetype=application/octet-stream'
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          use: 'url-loader?limit=10000&mimetype=image/svg+xml'
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(srcPath, 'index.html'),
        filename: 'index.html',
        path: outputPath
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ],
    devServer : {
      stats: 'errors-only',
      contentBase: outputPath,
      host: '0.0.0.0',
      port: 3000,
      inline: true,
      hot: true,
      historyApiFallback: true
    }
};
