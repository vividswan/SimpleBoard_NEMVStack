module.exports = {
  devServer: {
    // 1.api 요청이 있을때 어디에서 처리할지를 설정
    proxy: {
      "/api": {
        target: "http://localhost:5000/api",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  outputDir: "../backend/public" // 2.배포 파일의 위치를 지정
};
