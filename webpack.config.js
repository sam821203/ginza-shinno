const path = require("path");
// 清除目錄插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const isDev = process.env.NODE_ENV !== "production";

module.exports = {
  // devtool: "source-map",
  devtool: isDev ? "inline-source-map" : "",
  // 建置的模式，預設是 production / development
  mode: "production",
  context: path.resolve(__dirname, "src"),
  // 入口
  entry: {
    app: "./app.js",
  },
  // 輸出
  output: {
    // 有資料夾的配置
    // filename: "js/[name].[contenthash].js",

    // 沒資料夾的配置
    filename: "[name]-bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist/public"),
    // clean: true,
    assetModuleFilename: "[name].[hash][ext]",
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  devServer: {
    // static: {
    //   directory: path.resolve(__dirname, "dist"),
    // },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    // historyApiFallback: true,
  },
  // 模組載入規則
  module: {
    rules: [
      {
        // PUG 樣式表載入規則設定
        test: /\.pug$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: false }, // 不壓縮 HTML
          },
          {
            loader: "pug-html-loader",
            options: { pretty: true }, // 美化 HTML 的編排 (不壓縮HTML的一種)
          },
        ],
      },
      {
        // SASS 樣式表載入規則設定
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", // Translates CSS into CommonJS
          "postcss-loader",
          "sass-loader", // Compiles Sass to CSS
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpe?g|gif)$/,
        exclude: path.resolve("./node_modules"),
        type: "asset/resource",
      },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpe?g|gif)$/,
      //   exclude: path.resolve("./node_modules"),
      //   type: "asset/resource",
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         // 有資料夾的配置
      //         // name: "img/[name].[ext]"

      //         // 沒資料夾的配置
      //         name: "[name].[hash].[ext]",
      //       },
      //     },
      //   ],
      // },
    ],
  },
  plugins: [
    // 每次先清除前一次 build 的資料
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "銀座しんのう",
      template: "./app.pug",
      filename: "index.html",
      inject: "body",
      // chunks: ["vendor", "app"], // 根據 entry 的名字而定
      // minify: {
      //   sortAttributes: true,
      //   collapseWhitespace: false, // 折疊空白字元就是壓縮 Html
      //   collapseBooleanAttributes: true, // 折疊布林值属性，例:readonly checked
      //   removeComments: true, // 移除註釋
      //   removeAttributeQuotes: true, // 移除屬性的引號
      // },
    }),
    // 搬移靜態檔案
    // new CopyWebpackPlugin({
    //   patterns: [
    //     { from: "assets/current", to: "assets" },
    //     // { from: "other", to: "public" },
    //   ],
    // }),
    new MiniCssExtractPlugin({
      // 有資料夾的配置
      // filename: "css/[name]-bundle.css",

      // 沒資料夾的配置
      filename: "[name]-bundle.css",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: true,
        parallel: true,
      }),
    ],
    splitChunks: {
      // chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
          enforce: true,
          // priority: 10, // 預設為 0，必須大於預設 cacheGroups
        },
      },
    },
  },
};
