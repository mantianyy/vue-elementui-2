module.exports = {
  devServer: {
    port: 8081,
    open: true
  },
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_variable.scss";`
      }
    }
  }
}
