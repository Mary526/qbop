

const vueConfig = {
  outputDir: '../cloud_front/qbop',
    devServer: {
    disableHostCheck: true,
      port: 8081
  },
  // 添加cdn引用包
  // configureWebpack: {
  //   externals: {
  //     'wx':'wx'
  //   }
  // }

}


module.exports = vueConfig

