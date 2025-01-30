// webpack.renderer.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/renderer/index.tsx",  // React 앱의 엔트리 포인트
  output: {
    path: path.resolve(__dirname, "dist"),  // 빌드된 파일 위치
    filename: "renderer.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],  // 확장자 설정
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",  // TypeScript 처리
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/renderer/index.html",  // React 템플릿 HTML
    }),
  ],
  devServer: {
    static: {
        directory: path.join(__dirname, 'dist'), // 콘텐츠가 있는 디렉토리 경로
      },
    port: 8080,  // React 앱을 로컬 서버에서 실행
  },
  mode: 'production'
};
