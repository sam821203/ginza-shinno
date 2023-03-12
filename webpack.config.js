const path = require("path");
// 清除目錄插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 資料搬移插件
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemoveWebpackPlugin = require("remove-webpack-plugin");
const isDev = process.env.NODE_ENV !== "production";

module.exports = {
  // 建置的模式，預設是 production / development
  mode: "development",
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
    filename: "[name]-bindle.[contenthash].js",
    path: path.resolve(__dirname, "dist/public"),
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  // devtool: "source-map",
  devtool: isDev ? "inline-source-map" : "",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
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
          // "style-loader", // Creates `style` nodes from JS strings
          // 把 postcss-loader 放在 css-loader 前面 (第一步)
          // {
          //   loader: "postcss-loader",
          //   options: {
          //     // 傳遞 plugins 選項並載入 autoprefixer 做使用 (第二步)
          //     plugins: [require("autoprefixer")],
          //   },
          // },
          "sass-loader", // Compiles Sass to CSS
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // use: {
        //   loader: "babel-loader",
        //   options: {
        //     presets: ["@babel/preset-env"],
        //   },
        // },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpe?g|gif)$/,
        exclude: path.resolve("./node_modules"),
        type: "asset/resource",
        // use: [
        //   {
        //     loader: "url-loader",
        //     options: {
        //       limit: 8192,
        //       name: "[path][name].[ext]?[hash:8]",
        //     },
        //   },
        //   {
        //     loader: "image-webpack-loader",
        //     options: {
        //       mozjpeg: {
        //         progressive: true,
        //         quality: 65,
        //       },
        //       optipng: {
        //         enabled: false,
        //       },
        //       pngquant: {
        //         quality: "65-90",
        //         speed: 4,
        //       },
        //       gifsicle: {
        //         interlaced: false,
        //       },
        //     },
        //   },
        // ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "銀座しんのう",
      filename: "index.html",
      // template: "./template.html",
      template: "./app.pug",
      chunks: ["app"], // 根據 entry 的名字而定
      minify: {
        sortAttributes: true,
        collapseWhitespace: false, // 折疊空白字元就是壓縮 Html
        collapseBooleanAttributes: true, // 折疊布林值属性，例:readonly checked
        removeComments: true, // 移除註釋
        removeAttributeQuotes: true, // 移除屬性的引號
      },
    }),
    // 每次先清除前一次 build 的資料
    new CleanWebpackPlugin(),
    // new RemoveWebpackPlugin("./public/"),
    // 搬移靜態檔案
    // new CopyWebpackPlugin(
    //   {
    //     patterns: [
    //       { from: "css", to: "css" },
    //       { from: "images", to: "images" },
    //       { from: "assets", to: "assets" },
    //     ],
    //   },
    //   { from: "src/assets/current", flatten: true }
    // ),

    new MiniCssExtractPlugin({
      // 有資料夾的配置
      // filename: "css/[name]-bundle.css",

      // 沒資料夾的配置
      filename: "[name]-bundle.css",
    }),
  ],
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: "vendor",
  //         chunks: "all",
  //         enforce: true,
  //       },
  //     },
  //   },
  // },
};
