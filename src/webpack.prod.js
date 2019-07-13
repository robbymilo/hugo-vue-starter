const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    namedChunks: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-syntax-dynamic-import"]
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              autoprefixer: {
                browsers: ["last 2 versions"]
              },
              plugins: () => [autoprefixer]
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              outputPath: "images",
              publicPath: "images"
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|mp3)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets",
              publicPath: "/dist/assets"
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
            options: {
              /* ... */
            }
          },
          {
            loader: "vue-svg-inline-loader",
            options: {
              /* ... */
            }
          }
        ]
      }
    ]
  }
});
