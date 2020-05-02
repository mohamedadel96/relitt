module.exports = {
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8085, // CHANGE YOUR PORT HERE!
    https: true,
    hotOnly: false,
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/_variables.scss";`
      }
    }
  }
};