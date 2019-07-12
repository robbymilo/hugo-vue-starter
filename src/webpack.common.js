const path = require("path");
const WriteFilePlugin = require("write-file-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AssetsPlugin = require("assets-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: {
    app: "./js/main.js"
  },
  output: {
    path: path.resolve(__dirname, "./../static/dist"),
    chunkFilename: `[id].[chunkhash].js`,
    filename: `[id].[chunkhash].js`,
    publicPath: "/dist/",
    libraryTarget: "var",
    library: "EntryPoint"
  },
  plugins: [
    new CleanWebpackPlugin(["dist/*"], {
      root: path.resolve(__dirname, "./../static"),
      verbose: true,
      dry: false
    }),
    new WriteFilePlugin(),
    new MiniCssExtractPlugin({
      filename: "app.[contenthash].css",
      chunkFilename: "[name].css"
    }),
    new AssetsPlugin({
      filename: "webpack_assets.json",
      path: "../data",
      fullPath: false,
      prettyPrint: true,
      useCompilerPath: false
    }),
    new VueLoaderPlugin(),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.(scss|css)$/,
      cssProcessor: require("cssnano"),
      cssProcessorPluginOptions: {
        preset: ["default", { discardComments: { removeAll: true } }]
      },
      canPrint: true
    })
  ]
};
