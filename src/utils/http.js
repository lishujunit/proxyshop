import axios from "axios";
import { ElMessage } from 'element-plus';
import { useStore } from '@/stores/user';

const service = axios.create({
    baseURL: import.meta.env.VITE_APP_API,
    timeout: 1000 * 60,
    // headers: { 'X-Custom-Header': 'foobar' }
});

// 请求拦截器
service.interceptors.request.use(
    config => {
        const user = useStore();
        const token_type = user.userData?.token_type;
        const access_token = user.userData?.access_token;
        if(token_type && access_token) {
            config.headers['Authorization'] = `${token_type} ${access_token}`;
        }
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