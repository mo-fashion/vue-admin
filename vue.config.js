const path = require('path');
module.exports = {
    //基本路径
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
    //输出文件目录
    outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
    //eslint-loader  是否在保存的时候检查
    lintOnSave: true,
    /**
     *	webpack配置，see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
     **/
    chainWebpack: (config) => {
    },
    configureWebpack: (config) => {
    },
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        //开启 CSS source maps?
        sourceMap: false,
        //css预设器配置项
        loaderOptions: {
            sass: {
                prependData: `@import "./src/styles/main.scss";`
            }
        },
        //启用 CSS modules for all css / pre-processor files.
        // modules: false
        requireModuleExtension: true
    },
    parallel: require('os').cpus().length > 1,
    /**
     * PWA 插件相关配置，see https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-plugin-pwa
     **/
    pwa: {},
    // webpack-dev-server 相关配置
    devServer: {
        open: false, //编译完成是否打开网页
        host: '0.0.0.0', //指定使用地址，默认localhost， 0.0.0.0代表可以被外键访问
        port: 8080, //访问断开
        https: false, //编译失败是刷新页面
        hot: true, //开启热加载
        // hostOnly: false,
        proxy: null, //设置代理
        overlay: { //全屏模式下是否显示脚本错误
            warnings: true,
            errors: true
        },
        before: app => {
        }
    },
    /**
     * 第三方插件配置
     **/
    pluginOptions: {}
}
