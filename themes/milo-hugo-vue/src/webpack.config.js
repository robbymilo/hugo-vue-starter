const path = require('path');
const WriteFilePlugin = require('write-file-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AssetsPlugin = require('assets-webpack-plugin');
const autoprefixer = require('autoprefixer');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: './js/main.js',
  },
  output: {
    path: path.resolve(__dirname, './../static/dist'),
    chunkFilename: `[id].[chunkhash].js`,
    filename:`[id].[chunkhash].js`,
    publicPath:  path.resolve(__dirname, './../static/dist')
  },
  optimization: {
    namedChunks: true,
    splitChunks: {
      cacheGroups: {
        commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all'
        }
      }
    },
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] }
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: false,
              sourceMap: true,
              importLoader: 2
            }
          },
          {
            loader: "postcss-loader",
            options: {
                autoprefixer: {
                    browsers: ["last 2 versions"]
                },
                plugins: () => [
                    autoprefixer
                ]
            },
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist/*'], {
      root: path.resolve(__dirname, './../static'),
      verbose: true,
      dry: false,
    }),
    new WriteFilePlugin(),
    new MiniCssExtractPlugin({
      filename: "app.[contenthash].css",
      chunkFilename: "[name].css"
    }),
    new AssetsPlugin({
      filename: 'webpack_assets.json',
      path: '../data',
      fullPath: false,
      prettyPrint: true,
      useCompilerPath: false
    }),
    new VueLoaderPlugin()
  ],
};