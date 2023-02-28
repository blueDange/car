/* eslint-disable no-unused-vars */
import Vue from 'vue'
import axios from 'axios';

// import qs from "querystring"
// process.env.NODE_ENV环境
let baseURL;
if (process.env.NODE_ENV == 'development') {
	baseURL = 'http://127.0.0.1:3001/'
} else {
	baseURL = 'http://127.0.0.1:3001/'
}
// baseURL es6 方法

const $http = axios.create({
	baseURL,
})
// create 是axios自带的方法
// export default baseURL
export {
	baseURL
}
export const get = (url, params) => {
	params = params || {};
	return new Promise((resolve, reject) => {
		// axiso 自带 get 和 post 方法
		$http.get(url, {
			params,
			withCredentials: true
		}).then(res => {
			if (res.data.code === 200) {
				resolve(res.data.data);
			} else {
				alert(res.data.msg)
			}
		}).catch(error => {
			alert('网络异常');
		})
	})
}

export const post = (url, params) => {
	params = params || {};
	return new Promise((resolve, reject) => {
		$http.post(url, params).then(res => {
			if (res.data.code === 200) {
				resolve(res.data);
			} else {
				alert(res.data.msg)
			}
		}).catch(error => {
			alert('网络异常');
		})
	})
}
