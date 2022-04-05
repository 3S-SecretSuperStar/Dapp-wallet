const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const getHtmlPlugins = (chunks) => {
  return chunks.map(
    (chunk) =>
      new HtmlPlugin({
        title: "React Typescript Extension",
        filename: `${chunk}.html`,
        chunks: [chunk],
      })
  );
};

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: {
    popup: path.resolve("src/popup/index.tsx"),
    options: path.resolve("src/options/index.tsx"),
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx?$/,
        exclude: /node_modules/,
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/i,
      },
      {
        type: "asset/resource",
        test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve("src/static"),
          to: path.resolve("dist"),
        },
      ],
    }),
    ...getHtmlPlugins(["popup", "options"]),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve("dist"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
