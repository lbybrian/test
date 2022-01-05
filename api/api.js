//api
const qs = require('qs');
const config = require('./config');

export const 函数 = params = > {

		return axiosPost('url接口地址', qs.stringify(params, {
			arrayFormat: "brackets"
		}))

//		封装方法

		function axiosPost(url,params) {
			return axios.post(url, params, config)
		}

		function axiosGet(url, params) {
			if(params) {
				url = url + '?' + qs.stringify(params)
			}
			return axios.get(url, config)
		}

}