const path = require("path");
const common = require("./webpack.common");
const HtmlPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");

const getHtmlPlugins = (chunks) => {
  return chunks.map(
    (chunk) =>
      new HtmlPlugin({
        title: "FlowTx",
        filename: `${chunk}.html`,
        chunks: [chunk],
      })
  );
};

module.exports = merge(common, {
  entry: {
    popup: path.resolve("src/popup/index.tsx"),
    options: path.resolve("src/options/index.tsx"),
    background: path.resolve("src/background/index.ts"),
    contentScript: path.resolve("src/contentScript/index.tsx"),
  },
  module: {
    rules: [
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/i,
      },
    ],
  },
  plugins: [...getHtmlPlugins(["popup", "options"])],
  optimization: {
    splitChunks: {
      chunks: (chunk) => chunk.name !== "contentScript",
    },
  },
});
