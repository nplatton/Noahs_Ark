const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const ROOT_DIR = path.join(__dirname, "../");
const PUB_DIR = path.join(ROOT_DIR, "public");

const config = {
  entry: [path.resolve(ROOT_DIR, "src/index.js")],
  output: {
    path: path.resolve(ROOT_DIR, "./dist"),
    filename: "bundle.js",
    publicPath: "/",
    // clean: true,
  },
  mode: "development",
  resolve: {
    modules: [path.resolve(ROOT_DIR), "node_modules"],
  },
  performance: {
    hints: false,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(PUB_DIR, "index.html"),
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
      favicon: "src/images/favicon.png",
    }),
    new Dotenv(),
    new CopyWebpackPlugin({
      patterns: [{ from: "src/images", to: "images" }],
    }),
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
