const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    main : "./src/main/main.ts",
    preload : "./src/main/preload.ts"
    },
  target: "electron-main",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
