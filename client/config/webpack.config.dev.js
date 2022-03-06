const path = require("path");

const config = require("./webpack.config");

config.mode = "development";

config.devServer = {
  historyApiFallback: true,
  contentBase: path.resolve("src"),
  port: 8080,
  hot: true,
  open: true,
  host: "localhost",
  public: "http://localhost:8080",
  watchContentBase: true,
  writeToDisk: true,
  liveReload: true,
};

// config.devTool = "inline-source-map";

module.exports = config;
