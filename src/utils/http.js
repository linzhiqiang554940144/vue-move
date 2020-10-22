import axios from 'axios'
// import router from '@/router/index'
import {
	getSession
} from "@/utils/storage";


axios.defaults.baseURL=process.env.VUE_APP_BASE_API
// axios.defaults.baseURL = 'http://192.168.10.125:8088/';
// axios.defaults.baseURL = 'http://112.124.47.123:9905/';

axios.defaults.timeout = 6000;


import {
	Toast
} from 'vant'


// 请求拦截器
axios.interceptors.request.use(config => {
	console.log(config)
	if (getSession('token')) {
		config.headers['Authorization'] = getSession('token')
    }
    // config.headers = {
    //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    // }
	// if (store.state.token) {
	// 	config.headers['Authorization'] = store.state.token;
	// }
	return config;
}, error => {
	return Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use(res => {
	if (res.data.resultCode == 401) {
		// clearOneSession('token')
		// store.commit('SET_TOKEN', '');
	}
	return res;
}, err => {
	console.log(err);
	const statusCode = err.response.status
	if (err.response.data.resultCode == 401) {
		// store.commit('SET_TOKEN', '');
		// clearOneSession('token')
		// router.push('/login')
		return
	}
	if (statusCode) {
		switch (statusCode) {
			case 403:
				return Toast.fail('权限不足')
			case 404:
				return Toast.fail('请求不存在')
			case 500:
				return Toast.fail('服务器错误')
		}
	}

	return Promise.reject(err);
});

//请求函数
export const fetch = ({
	url,
	method = 'GET',
	data = {},
	loading = true
} = {}) => {
	if (!url) return Toast.fail('缺少请求路径!')
	loading && Toast.loading({
		message: '加载中...',
		duration: "1000",
		forbidClick: true,
	})

	const options = {
		url,
		method,
		data,
	}

	if (method.toUpperCase() === 'GET') {
		options['params'] = data
		delete options['data']
	}
	// if (token) headers['Authorization'] = getSession('token')
	return new Promise((resolve, reject) => {
		axios(options).then(res => {
			if (res.data.resultCode == 0) {
				Toast.success('加载完成')
			} else {
				Toast.fail(res.data.message)
			}
			resolve(res.data)
		}).catch(err => {
			Toast.fail('请求超时')
			loading && Toast.error(err.data.message)
			reject(err)
		})
	})
}