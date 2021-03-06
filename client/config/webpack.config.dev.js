const path = require("path");

const config = require("./webpack.config");

config.mode = "development";

config.devServer = {
  historyApiFallback: true,
  contentBase: path.resolve("src"),
  port: 8000,
  hot: true,
  open: true,
  host: "localhost",
  public: "http://localhost:8000",
  watchContentBase: true,
  writeToDisk: true,
  liveReload: true,
};

// config.devtool = "inline-source-map";

module.exports = config;
