const path = require("path");

module.exports = {
  mode: "production",
  context: path.join(__dirname, "./"),
  entry: "./app/app.jsx",
  devtool: "#eval-source-map",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "jsx-loader",
        exclude: /node_modules/,
        include: path.join(__dirname, "app"),
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
    ],
  },
};
