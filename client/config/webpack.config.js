const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const ROOT_DIR = path.join(__dirname, "../");
const PUB_DIR = path.join(ROOT_DIR, "public");

const config = {
  entry: [path.resolve(ROOT_DIR, "src/index.js")],
  output: {
    path: path.resolve(ROOT_DIR, "./dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  mode: "development",
  resolve: {
    modules: [path.resolve(ROOT_DIR), "node_modules"],
  },
  performance: {
    hints: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(PUB_DIR, "index.html"),
    }),
    // new HtmlWebpackPlugin({
    //   filename: "index.html",
    //   template: "public/index.html",
    //   favicon: "src/images/favicon.png",
    // }),
    new Dotenv(),
  ],
  module: {
    rules: [
      { test: /\.(png|jpe?g)$/, use: ["file-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
    ],
  },
};

module.exports = config;
