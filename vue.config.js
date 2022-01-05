//module.exports = {
//	devServer:{
////		host: 'localhost', // can be overwritten by process.env.HOST
////  	port: 8080, 
//		open:true
//	}
//}

//返乡代理
module.exports = {
//	publicPath: './',
//	productionSourceMap: false,
	devServer: {
		open:true,
		proxy: {
			'/new': {
				target: "http://localhost:8080",//这个是你要访问的接口地址
				ws:true,
				changeOrigin: true,
				pathRewrite: {//重写地址  比如说 你的接口地址是'https://188.62.63/xxyy/getUser' 你请求得时候地址只需要写'/test/getUser'
					'/^new': '/datas'  
				}
			}
		}
	}
}


//根地址配置？？
//const path = require('path')
//const resolve = dir => path.join(__dirname, dir)
//console.log(resolve,__dirname)
//module.exports = {
//	devServer:{
//		open:true
//	},
//
//  chainWebpack: config => {
//      config.resolve.alias
//          .set('@', resolve('src'))
//  }
//}
