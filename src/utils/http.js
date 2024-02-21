import axios from "axios";
import { ElMessage } from 'element-plus';

const service = axios.create({
    baseURL: '/api',
    timeout: 1000 * 60,
    headers: { 'X-Custom-Header': 'foobar' }
});

// 请求拦截器
service.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么，例如设置token
        // config.headers['X-Token'] = 'your token';
        return config;
    },
    error => {
        // 对请求错误做些什么
        console.log(error); // for debug
        Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        const res = response.data;
        // 你可以在这里根据返回的状态码 res.code 来判断请求是否成功
        return res;
    },
    error => {
        ElMessage({
            message: error.response.data.detail || error,
            type: 'error',
        })
        return Promise.reject(error);
    }
);

export default service;