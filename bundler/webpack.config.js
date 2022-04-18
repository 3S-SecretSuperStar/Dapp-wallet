const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const WindiCSSPlugin = require("windicss-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");

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
  plugins: [
    new WindiCSSPlugin({
      config: {
        extract: {
          include: ["**/*.{html,jsx,tsx}"],
          exclude: ["node_modules", ".git", "dist"],
        },
      },
    }),
    ...getHtmlPlugins(["popup", "options"]),
  ],
  optimization: {
    splitChunks: {
      chunks: (chunk) => chunk.name !== "contentScript",
    },
  },
});
