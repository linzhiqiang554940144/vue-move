const path = require('path')
const px2rem = require('postcss-px2rem')

module.exports = {
	//项目根路径
	publicPath: process.env.VUE_APP_BASE_URL,

	//输出文件夹名（最好设置为项目名）
	outputDir: 'dist',

	//静态资源文件夹(相对于dist)
	assetsDir: './static',

	//指定生成html路径
	indexPath: 'index.html',

	//开发阶段保存后显示lint错误警告
	lintOnSave: false,

	//生产环境是否生成sourceMap
	productionSourceMap: false,

	css: {
    loaderOptions: {
      postcss: {
        plugins: [
					px2rem({
						//按照375设计稿
						//rem转换基准值 => 37.5px == 1rem
						//不想被转换可用大写PX
						remUnit: 37.5
					})
				]
      }
    }
  },

	//原始webpack配置
	configureWebpack(config) {
		// 生产模式下剔除console
		if (process.env.NODE_ENV === "production") {
			config.optimization.minimizer.map((arg) => {
				const option = arg.options.terserOptions.compress;
				option.drop_console = true;
				return arg;
			})
		}
	},

	//链式webpack配置
	chainWebpack: config => {
		//别名
		config.resolve.alias
		.clear()
		.set('@', path.join(__dirname, 'src'))
		.set('@c', '@/components')

		//指定模块路径
		config.resolve.modules
			.prepend(path.resolve(__dirname, './node_modules'))

		//自动化导入less
		const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
		types.forEach(type => {
			config.module.rule('less').oneOf(type).use('style-resource')
				.loader('style-resources-loader')
				.options({
					patterns: [
						//全局 variable
						path.resolve(__dirname, './src/assets/css/variables.less')
					],
				})
		})
	},



	//服务相关配置
	devServer: {

		//可使用本机ip访问
		host: '0.0.0.0',

		//服务启动端口
		port: process.env.VUE_APP_PORT,

		// disableHostCheck: true,

		//自动打开浏览器预览
		open: true,

		// 页面自动热重载
		hot: true,

		//请求代理
		// proxy:	{
		// 	//配置多个同域名代理
		// 	...Object.assign(...process.env.VUE_APP_CROSS_PRE.split('-').map(p => ({
		// 		[p]: {
		// 			target: process.env.VUE_APP_CROSS_URL,
		// 			changeOrigin: true,
		// 			pathRewrite: { [`^${p}`]: p.substring(1) }
		// 		}
		// 	}))),
			
		// 	//more...
		// }
		proxy: {
			'/ys': {
				target: 'https://ezcloud.uniview.com:8088',
				changeOrigin: true,
				ws:true,
				pathRewrite: { '^/fkj': '' }
			},
			'/api': {
				target: 'http://192.168.10.128:8081',
				changeOrigin: true,
				ws:true,
				pathRewrite: { '^/api': '' }
			}
		}
	}
	// transpileDependencies: [
	// 	'vue-echarts'
	// ]
}