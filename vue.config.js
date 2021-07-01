module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("md")
      .test(/\.md$/)
      .use("raw-loader")
      .loader("raw-loader");
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/scss/_variables.scss", "@/scss/_mixins.scss";',
      },
    },
  },
};
