const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// webpack development와 production 파일을 나눈다!
// wepback hash를 사용한 캐시 예제 + clean directory
// webpack-dev-server 실행
// 더 나아가서 typescript + react 환경 구성

module.exports = {
  entry: "./src/index",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../build")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ["babel-loader"]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".jsx", ".js"]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ]
};
